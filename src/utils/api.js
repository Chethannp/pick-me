import axios from "axios";

export default async url => {
  //Proxy setup code to use stubs
  if (!__isBrowser__) {
    url = process.env.API_ENDPOINT + url;
  }
  const res = await axios.get(url);
  return res.data;
};
