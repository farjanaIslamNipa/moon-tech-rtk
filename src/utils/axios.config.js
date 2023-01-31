import axios from "axios";

let URL;

switch (process.env.REACT_APP_ENVIRONMENT) {
  case 'DEVELOPMENT':
    URL = 'http://localhost:5000/products'
    break;
  case 'PRODUCTION':
    URL = 'http://localhost:5000/products'
    break;
  default:
    URL = 'http://localhost:5000/products';
    
}

const instance = axios.create({
  baseURL: URL
});

export default instance;