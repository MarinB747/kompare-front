import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...users, action.payload];
    case DELETE:
      return users.filter(post => post._id !== action.payload);
    default:
      return users;
  }
};
