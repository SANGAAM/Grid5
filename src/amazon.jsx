import axios from "axios";

const amazon = axios.create({
  baseURL: "https://amazon-price1.p.rapidapi.com/search",
  headers: {
    "X-RapidAPI-Key": "1a19e97e6emshd12dabb29fb770dp19193ajsnc320128fea09",
    "X-RapidAPI-Host": "amazon-price1.p.rapidapi.com",
  },
});

export default amazon;
