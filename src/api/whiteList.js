const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {
        // 1. GetWhiteListById
        // This method allows you to see the details of the whitelist that you have previously added. To use this method,
        // you must send the given "Guid" value when you add the original record.
        getWhiteListById: (guid) =>
            httpClient.get(`/api/GeneralWhiteList/GetWhiteListById?guid=${guid}`),

        // 2. NewWhiteList
        // This method allows you to add whitelist, individual, entity/organization, vessel, or aircraft information or
        // document numbers that you do not want to give results in your searches.
        // If you match the records you have added to the white list in your searches
        newWhiteList: (whiteListData) =>
            httpClient.post('/api/GeneralWhiteList/NewWhiteList', {
                whiteListData
            }),

        // 3. UpdateWhiteList
        // This method makes it possible to edit records that were previously added to the whitelist.
        UpdateWhiteList: (whiteListData) =>
            httpClient.post('/api/GeneralWhiteList/UpdateWhiteList', {
                whiteListData

            }),

        // 4. DeleteWhiteList
        // This method allows you to delete records from WhiteList by Guid.
        DeleteWhiteList: (guid) =>
            httpClient.get(`/api/GeneralWhiteList/DeleteWhiteList?guid=${guid}`),



    };
};
