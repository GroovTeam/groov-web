import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { 
    align: 'justify', 
    id: '', 
    label: '', 
    minWidth: 100
  },
  { 
    align: 'justify', 
    id: 'artist', 
    label: 'Artist', 
    minWidth: 100
  },
  {
    align: 'justify',
    id: 'Song',
    label: 'Song',
    minWidth: 100,
  },
  {
    align: 'justify',
    id: 'Album',
    label: 'Album',
    minWidth: 100,
  },
  {
    align: 'justify',
    id: 'Genre',
    label: 'Genre',
    minWidth: 100,
  },
  {
    align: 'justify',
    id: 'Lenght',
    label: 'Length',
    minWidth: 100,
  },
  {
    align: 'right',
    id: 'Play Track',
    label: 'Play',
    minWidth: 100,
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TopTracks({tracks}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {tracks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((prop, index) => {
              return (
                <TableRow  hover role="checkbox" key={index}>
                  <TableCell>{prop.pic}</TableCell>
                  <TableCell>{prop.artist}</TableCell>
                  <TableCell>{prop.song}</TableCell>
                  <TableCell>{prop.album}</TableCell>
                  <TableCell>{prop.genre}</TableCell>
                  <TableCell>{prop.length}</TableCell>
                  <TableCell>{prop.play}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={tracks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
