import axios from "axios";

const url = "http://localhost:4000/api/v1";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
