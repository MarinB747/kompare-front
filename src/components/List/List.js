import React from "react";
import User from "./User/User";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./list.css";
const useStyles = makeStyles({
  table: {
    minWidth: 530
  }
});
function List() {
  const classes = useStyles();
  const users = useSelector(state => state.users);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {users.map(user => (
            <TableRow key={user._id}>
              <User user={user} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
