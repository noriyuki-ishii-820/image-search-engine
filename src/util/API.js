import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f91700001000001763d74916f644fd5ba78b411e7a19035'
    }
});