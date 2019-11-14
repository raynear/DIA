import * as React from 'react';

import { useTheme } from '@material-ui/core';
import { Container, Paper, Grid, Table, TableHead, TableBody, TableCell, TableFooter, TablePagination, TableRow, IconButton, Button } from "@material-ui/core";
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@material-ui/icons';

import useStyles from "./Style";

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

function createData(Merchant: string, Clarity: string, Cut: string, Carat: string, Color: string, Price: number, Certification: string, Datetime: string) {
  return { Merchant, Clarity, Cut, Carat, Color, Price, Certification, Datetime };
}

const rows = [
  createData('Cupcake', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10/ 18:35'),
  createData('Donut', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Eclair', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Frozen yoghurt', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Gingerbread', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Honeycomb', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Ice cream sandwich', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Jelly Bean', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('KitKat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Jelly Bean', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('KitKat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Jelly Bean', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('KitKat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Jelly Bean', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('KitKat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Lollipop', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Marshmallow', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Jelly Bean', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('KitKat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Jelly Bean', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('KitKat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Nougat', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
  createData('Oreo', 'IF', 'Good', '3/4', 'D', 4000000, 'A Certified/0xaaaa', '2019/09/10 18:35'),
].sort((a, b) => (a.Datetime < b.Datetime ? -1 : 1));

function Dashboard() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // { Merchant, Clarity, Cut, Carat, Color, Price, Certification, Datetime };
  return (
    <>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.rootcontainer}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={12} md={12} lg={12}>
            <Paper style={{ textAlign: "right" }}>
              <Button href="/NewPost">New Post</Button>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tablehead}>Merchant</TableCell>
                    <TableCell className={classes.tablehead} align="center">Clarity</TableCell>
                    <TableCell className={classes.tablehead} align="center">Cut</TableCell>
                    <TableCell className={classes.tablehead} align="center">Carat</TableCell>
                    <TableCell className={classes.tablehead} align="center">Color</TableCell>
                    <TableCell className={classes.tablehead} align="center">Price</TableCell>
                    <TableCell className={classes.tablehead} align="center">Certification</TableCell>
                    <TableCell className={classes.tablehead} align="center">Datetime</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row: any) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.Merchant}</TableCell>
                      <TableCell align="center">{row.Clarity}</TableCell>
                      <TableCell align="center">{row.Cut}</TableCell>
                      <TableCell align="center">{row.Carat}</TableCell>
                      <TableCell align="center">{row.Color}</TableCell>
                      <TableCell align="right">{row.Price}</TableCell>
                      <TableCell align="right">{row.Certification}</TableCell>
                      <TableCell align="right">{row.Datetime}</TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={8} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                      colSpan={8}
                      count={rows.length}
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

export default Dashboard;
