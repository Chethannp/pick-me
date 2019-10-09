import axios from "axios";

export default async (url, type) => {
    if (!__isBrowser__) {
        url = process.env.API_ENDPOINT + url;
    }

    let collection;

    switch (true) {
    case type === "get":
        await axios
            .get(url)
            .then(res => {
                collection = res;
            })
            .catch(err => {
                collection = err;
            });
        break;
    case type === "post":
        await axios
            .post(url)
            .then(res => {
                collection = res;
            })
            .catch(err => {
                collection = err;
            });
        break;
    default:
        break;
    }

    return collection.data;
};
