import * as React from 'react';
import { useState, useEffect } from "react";

import { useTheme, Typography, Container, Paper, Grid, Table, TableHead, TableBody, TableCell, TableFooter, TablePagination, TableRow, IconButton, ButtonGroup, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@material-ui/icons';

import useStyles from "./Style";

import Web3 from "web3";

import { marketContractAddress, marketABI } from "./SmartContract";

interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: ITablePaginationActionsProps) {
  const classes = useStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.pagination}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
}

interface IDiamond {
  ID: number;
  Clarity: string;
  Cut: string;
  Carat: string;
  Color: string;
  Price: number;
  Status: string;
  ReportHash: string;
}

enum DiaStatus {
  OffSale = 0,
  OnSale = 1,
  Rented = 2,
  Sold = 3
}

function DiaStatusStr(status: number) {
  if (status === 0) {
    return "OffSale";
  } else if (status === 1) {
    return "OnSale";
  } else if (status === 2) {
    return "Rented";
  } else if (status === 3) {
    return "Sold";
  }
  return "NoStatusExist";
}

function DiamondList(props: any) {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState({ type: "All", OffSale: false, OnSale: false, Rented: false, Sold: false })
  const [displayRows, setDisplayRows] = useState<IDiamond[]>([]);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, displayRows.length - page * rowsPerPage);

  useEffect(() => {
    const web3 = new Web3((window as any).web3.currentProvider);
    const contract = new web3.eth.Contract(marketABI as any, marketContractAddress);

    contract.methods.getDiamonds().call().then((r: any) => {
      console.log(r);
      const tmpDisplayRows = displayRows;
      for (let j = 0; j < r[0].length; j++) {
        tmpDisplayRows.push({ ID: r[0][j], Clarity: r[1][j], Cut: r[2][j], Carat: r[3][j], Color: r[4][j], Price: r[5][j], ReportHash: r[6][j], Status: r[7][j]});
      }
      setDisplayRows(tmpDisplayRows)
      setFilter({ ...filter, OffSale: true, OnSale: true, Rented: true, Sold: true })
    })
  }, [])

  // function createData(ID: number, Clarity: string, Cut: string, Carat: string, Color: string, Price: number, Status: string, Certification: string, Datetime: string) {
  //   console.log({ ID, Clarity, Cut, Carat, Color, Price, Status, Certification, Datetime });
  //   return { ID, Clarity, Cut, Carat, Color, Price, Status, Certification, Datetime };
  // }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (e: React.MouseEvent<unknown>, name: string) => {
    props.history.push("/DIA/Diamond/" + name.toString());
  }

  function filterList(listType: string) {
    if (listType === "All") {
      setFilter({ ...filter, type: listType })
    }
    else if (listType === "My") {
      setFilter({ ...filter, type: listType })
    }
  }

  function handleChange(status: string) {
    setFilter({ ...filter, [status]: !filter[status] })
  }


  function inMyCookieList(id: number) {
    const Cookies = document.cookie.split(";");
    for (const i in Cookies) {
      if (Cookies[i].split("=")[0].trim() === "MyDiaList") {
        const DiaList = JSON.parse(Cookies[i].split("=")[1]);
        if (DiaList.includes(id)) {
          return true;
        }
      }
    }
    return false;
  }

  function filtering(obj: any) {
    if (filter.type === "My" && !inMyCookieList(parseInt(obj.ID, 10))) {
      return false;
    }
    if (filter.OffSale && parseInt(obj.Status, 10) === DiaStatus.OffSale) {
      return true;
    } else if (filter.OnSale && parseInt(obj.Status, 10) === DiaStatus.OnSale) {
      return true;
    } else if (filter.Rented && parseInt(obj.Status, 10) === DiaStatus.Rented) {
      return true;
    } else if (filter.Sold && parseInt(obj.Status, 10) === DiaStatus.Sold) {
      return true;
    }
    return false;
  }

  return (
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
            <div className={classes.listImg}>
              <Typography variant="h2" color="textSecondary" className={classes.listText}>{filter.type} Diamond List</Typography>
            </div>
            <Paper style={{ textAlign: "right" }}>
              <ButtonGroup>
                <Button color="primary" disabled={filter.type === "All"} onClick={() => filterList("All")}>All</Button>
                <Button color="primary" disabled={filter.type === "My"} onClick={() => filterList("My")}>My</Button>
              </ButtonGroup>
              <FormControlLabel
                control={<Checkbox checked={filter.OffSale} onChange={() => handleChange('OffSale')} value="OffSale" />}
                label="OffSale"
              />
              <FormControlLabel
                control={<Checkbox checked={filter.OnSale} onChange={() => handleChange('OnSale')} value="OnSale" />}
                label="OnSale"
              />
              <FormControlLabel
                control={<Checkbox checked={filter.Rented} onChange={() => handleChange('Rented')} value="Rented" />}
                label="Rented"
              />
              <FormControlLabel
                control={<Checkbox checked={filter.Sold} onChange={() => handleChange('Sold')} value="Sold" />}
                label="Sold"
              />
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tablehead}>ID</TableCell>
                    <TableCell className={classes.tablehead} align="center">Clarity</TableCell>
                    <TableCell className={classes.tablehead} align="center">Cut</TableCell>
                    <TableCell className={classes.tablehead} align="center">Carat</TableCell>
                    <TableCell className={classes.tablehead} align="center">Color</TableCell>
                    <TableCell className={classes.tablehead} align="center">Price</TableCell>
                    <TableCell className={classes.tablehead} align="center">Status</TableCell>
                    <TableCell className={classes.tablehead} align="center">ReportHash</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0 ? displayRows.filter((obj: any) => filtering(obj)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : displayRows).map((row: any) => (
                    <TableRow key={row.ID} hover={true} onClick={(e) => handleClick(e, row.ID)}>
                      <TableCell align="center">{row.ID}</TableCell>
                      <TableCell align="center">{row.Clarity}</TableCell>
                      <TableCell align="center">{row.Cut}</TableCell>
                      <TableCell align="center">{row.Carat}</TableCell>
                      <TableCell align="center">{row.Color}</TableCell>
                      <TableCell align="right">{row.Price}</TableCell>
                      <TableCell align="right">{DiaStatusStr(parseInt(row.Status, 10))}</TableCell>
                      <TableCell align="right">{row.ReportHash}</TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 33 * emptyRows }}>
                      <TableCell colSpan={8} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[10, 20, 30, { label: 'All', value: -1 }]}
                      colSpan={8}
                      count={displayRows.filter((obj: any) => filtering(obj)).length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                      }}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
  );
}

export default DiamondList;
