const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {
        // 1. GetLocalListCategories
        getLocalListCategories: () =>
            httpClient.get('/api/LocalList/GetLocalListCategories'),

        // 2. GetBlackListById
        getBlackListById: (guid) =>
            httpClient.get(`/api/LocalList/GetBlackListById?guid=${guid}`),

        // 3. NewBlackList
        // {
        //   "TypeId": 0,
        //   "FirstName": "string",
        //   "SecondName": "string",
        //   "LastName": "string",
        //   "BirthDayDate": "2024-12-25T13:19:23.365Z",
        //   "NationalityId": 0,
        //   "DocumentNumber": "string",
        //   "PassportNumber": "string",
        //   "DocumentNumber2": "string",
        //   "OtherInformation": "string",
        //   "ExtraInfo": "string",
        //   "ReferenceNumber": "string",
        //   "AkaName": "string",
        //   "AkaName2": "string",
        //   "AkaName3": "string",
        //   "AkaName4": "string",
        //   "PhoneNumber": "string",
        //   "PhoneNumber2": "string",
        //   "CategoryKey": "string",
        //   "Email": "string"
        // }

        newBlackList: (blackListData) =>
            httpClient.post('/api/LocalList/NewBlackList', blackListData),

        // 4. UpdateBlackList
        updateBlackList: (blackListData) =>
            httpClient.post('/api/LocalList/UpdateBlackList', blackListData),

        // 5. DeleteBlackList
        deleteBlackList: (guid) =>
            httpClient.post('/api/LocalList/DeleteBlackList', { Guid: guid }),
    };
};
