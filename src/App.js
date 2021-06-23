import React, { useEffect } from "react";
import "./app.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/actions/actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="app">
      <header className="header">KOMPARE PROJECT</header>
      <div className="body">
        <Form />
        <List />
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
