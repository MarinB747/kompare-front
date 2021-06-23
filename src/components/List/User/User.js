import React from "react";
import "./user.css";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/actions/actions";
import TableCell from "@material-ui/core/TableCell";

function User({ user }) {
  const dispatch = useDispatch();
  return (
    <div className="user__container">
      <TableCell className="user__data">{user.ime}</TableCell>
      <TableCell className="user__data">{user.prezime}</TableCell>
      <TableCell className="user__data">{user.email}</TableCell>
      <button
        className="user__btn"
        onClick={() => dispatch(deleteUser(user._id))}
      >
        X
      </button>
    </div>
  );
}

export default User;
