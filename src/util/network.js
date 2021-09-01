import axios from "axios";



export const getData = async (url) => {
  const data = await axios.get(url)
  return data;
};

