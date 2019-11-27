import * as React from 'react';
import { useState, useEffect } from "react";

import { useTheme, Typography, Container, Paper, Grid, Table, TableHead, TableBody, TableCell, TableFooter, TablePagination, TableRow, IconButton, ButtonGroup, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@material-ui/icons';

import useStyles from "./Style";

// import Web3 from "web3";

import { contractAddress, abi } from "./SmartContract";

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



function DiamondList(props: any) {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState({ type: "all", OffSale: true, OnSale: true, Rented: true })
  //  const [displayRows, setDisplayRows] = useState([
  const displayRows = [
    createData(0, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(1, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(2, 'IF', 'Good', '3/4', 'D', 4000000, 'OffSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(3, 'IF', 'Good', '3/4', 'D', 4000000, 'OffSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(4, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(5, 'IF', 'Good', '3/4', 'D', 4000000, 'OffSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(6, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(7, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(8, 'IF', 'Good', '3/4', 'D', 4000000, 'OnSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(9, 'IF', 'Good', '3/4', 'D', 4000000, 'OnSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(10, 'IF', 'Good', '3/4', 'E', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(11, 'IF', 'Good', '3/4', 'E', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(12, 'IF', 'Good', '3/4', 'E', 4000000, 'OnSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(13, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(14, 'IF', 'Good', '3/4', 'D', 4000000, 'OffSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(15, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(16, 'IF', 'Good', '3/4', 'D', 4000000, 'OffSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(17, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(18, 'IF', 'Good', '3/4', 'D', 4000000, 'OffSale', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(19, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(20, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(21, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
    createData(22, 'IF', 'Good', '3/4', 'D', 4000000, 'Rented', 'A Certified/0xaaaa', '2019/09/10 18:35'),
  ].sort((a, b) => (a.Datetime < b.Datetime ? -1 : 1));

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, displayRows.length - page * rowsPerPage);

  useEffect(() => {
    const mycontract = (window as any).web3.eth.contract(abi);
    const contract = mycontract.at(contractAddress);
    //    setDisplayRows(displayRows.push({ ID: 23, Cut: 'IF', Clarity: 'Good', Carat: '3/4', Color: 'G', Price: 4000000, Certification: 'A Certified/0xaaaa', Datetime: '2019/09/10 18:35' }))

    contract.getDiamonds((e: any, r: any) => {
      console.log("get Diamonds!!!")
      console.log(r);
    });
  }, [])

  function createData(ID: number, Clarity: string, Cut: string, Carat: string, Color: string, Price: number, Status: string, Certification: string, Datetime: string) {
    return { ID, Clarity, Cut, Carat, Color, Price, Status, Certification, Datetime };
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);

    const mycontract = (window as any).web3.eth.contract(abi);
    const contract = mycontract.at(contractAddress);
    contract.getDiamonds((e: any, r: any) => {
      console.log("get Diamonds!!!")
      console.log(r);
      //    rows.push(createData());
      //    rows.sort((a, b) => (a.Datetime < b.Datetime ? -1 : 1));
    });

  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (e: React.MouseEvent<unknown>, name: string) => {
    console.log(displayRows[name]);
    props.history.push("/DIA/Diamond/" + name.toString());
  }

  function filterList(listType: string) {
    if (listType === "all") {
      console.log("all");
      setFilter({ ...filter, type: listType })
    }
    else if (listType === "my") {
      console.log("my");
      setFilter({ ...filter, type: listType })
    }
  }

  function handleChange(status: string) {
    setFilter({ ...filter, [status]: !filter[status] })
  }

  function filtering(obj: any) {
    if (filter.OffSale && obj.Status.indexOf("OffSale") !== -1) {
      return true;
    } else if (filter.OnSale && obj.Status.indexOf("OnSale") !== -1) {
      return true;
    } else if (filter.Rented && obj.Status.indexOf("Rented") !== -1) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} className={classes.grid} xs={12} md={12} lg={12}>
            <div className={classes.listImg}>
              <Typography variant="h2" color="textSecondary" className={classes.listText}>{filter.type} Diamond List</Typography>
            </div>
            <Paper style={{ textAlign: "right" }}>
              <ButtonGroup>
                <Button color="primary" disabled={filter.type === "all"} onClick={() => filterList("all")}>All</Button>
                <Button color="primary" disabled={filter.type === "my"} onClick={() => filterList("my")}>My</Button>
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
                    <TableCell className={classes.tablehead} align="center">Certification</TableCell>
                    <TableCell className={classes.tablehead} align="center">Datetime</TableCell>
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
                      <TableCell align="right">{row.Status}</TableCell>
                      <TableCell align="right">{row.Certification}</TableCell>
                      <TableCell align="right">{row.Datetime}</TableCell>
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
      </Container>    </>
  );
}

export default DiamondList;