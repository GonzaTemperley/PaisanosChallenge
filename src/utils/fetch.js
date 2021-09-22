import axios from 'axios'

const call = async (url, method, body) => {
    const options = {
        url,
        method,
        headers: requestHeaders(),
        data: method !== "GET" ? JSON.stringify(body) : null,
    }

    return axios(url, options)
        .then(res => parseStatus(res.status, res))
}

function parseStatus(status, res) {
    return new Promise((resolve, reject) => {
        if (status >= 200 && status < 300) {
            resolve(res.data)
        } else {
            reject({ status, res })
        }
    })
}

function requestHeaders() {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
}

export default call