import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7842dc1c6c144387bc798a9b1cb3da67'
  }
})
