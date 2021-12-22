import axios from "axios"

export const get = async (url, headers) => {
    if (headers) {
        return axios.get(url, { headers: headers });
    } else {
        return axios.get(url);
    }
}

export const post = (url, data) => {
    return axios.post(url, data)
}