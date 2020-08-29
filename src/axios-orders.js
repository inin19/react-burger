import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-learning-burger-15227.firebaseio.com/',
});

export default instance;
