const axios = require('axios');

const createHttpClient = (baseURL, username, password) => {
    const authKey = Buffer.from(`${username}:${password}`).toString('base64');
    return axios.create({
        baseURL,
        headers: {
            'Authorization': `Basic ${authKey}`,
            'Content-Type': 'application/json',
        },
    });
};

module.exports = createHttpClient;
