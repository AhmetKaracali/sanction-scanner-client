const api = require('./api');

module.exports = (baseURL, username, password) => {
    return {
        customer: api.customer(baseURL, username, password),
        search: api.search(baseURL, username, password),
        operations: api.operations(baseURL, username, password),
        localList: api.localList(baseURL, username, password),
        whiteList: api.whiteList(baseURL, username, password),
        reports: api.reports(baseURL, username, password),
        retrieving: api.retrieving(baseURL, username, password),
    };
};
