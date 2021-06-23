import React, { useState } from "react";
import "./form.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Form() {
  const [userData, setUserData] = useState({
    ime: "",
    prezime: "",
    email: ""
  });
  const dispacth = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispacth(createUser(userData));
    setUserData({ userData, ime: "", prezime: "", email: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__container">
        <TextField
          className="form__input"
          style={{ minWidth: "176px" }}
          placeholder="ime"
          type="text"
          value={userData.ime}
          onChange={e => setUserData({ ...userData, ime: e.target.value })}
        />
        <TextField
          style={{ minWidth: "176px" }}
          className="form__input"
          placeholder="prezime"
          type="text"
          value={userData.prezime}
          autoCapitalize="words"
          onChange={e => setUserData({ ...userData, prezime: e.target.value })}
        />
        <TextField
          className="form__input"
          style={{ minWidth: "176px" }}
          placeholder="email"
          type="email"
          value={userData.email}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Prihvati
      </Button>
    </form>
  );
}

export default Form;
