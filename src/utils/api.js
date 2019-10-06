import axios from "axios";

export default async (url, type) => {
  if (!__isBrowser__) {
    url = process.env.API_ENDPOINT + url;
  }

  let res;

  switch (true) {
    case type === "get":
      res = await axios.get(url);
      break;
    case type === "post":
      res = await axios.post(url);
    default:
      break;
  }

  return res.data;
};
