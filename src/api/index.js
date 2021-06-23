import axios from "axios";

const url = "https://kompare-project.herokuapp.com/users";
export const fetchUsers = () => axios.get(url);
export const createUser = newUser => axios.post(url, newUser);
export const deleteUser = id => axios.delete(`${url}/${id}`);
