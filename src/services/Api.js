import axios from "axios";

const Api = axios.create({
  baseURL: 'http://sofit-mobile-challenge.herokuapp.com',
});

export default Api;