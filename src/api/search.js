const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {
        // 1. SearchByName
        // This method allows searching using names of the type "individual, corporate, vessel, aircraft, or any other".
        // Individual type is used to search for real persons, corporate type for legal entities, companies or
        // organizations, vessel type for ships, aircraf
        searchByName: (name) =>
            httpClient.get(`/api/Search/SearchByName?name=${name}`),

        // 2. SearchByIdentity
        // This method allows people, organizations, vessels or aircrafts to be scanned with their
        // official identification numbers.
        searchByIdentity: (id) =>
            httpClient.get(`/api/Search/SearchByIdentity?id=${id}`),

        // 3. searchByIdDocumentNumber
        // With this method, searches can be performed by filling in information from an official ID document, such as
        // a passport or ID, into the required fields.
        searchByIdDocumentNumber: (documentNumber,entityType =0) =>
            httpClient.get(`/api/Search/SearchByDocumentNumber?documentNumber=${documentNumber}&searchType=1&entityType=${entityType}`),

        // 4. searchByPassportDocumentNumber
        // With this method, searches can be performed by filling in information from an official Passport document, such as
        // a passport or ID, into the required fields.
        searchByPassportDocumentNumber: (documentNumber) =>
            httpClient.get(`/api/Search/SearchByDocumentNumber?documentNumber=${documentNumber}&searchType=2`),

        // 5. SearchByPassport
        // This method allows you to search for real persons using their passport numbers.
        searchByPassportNo: (passportNo) =>
            httpClient.get(`/api/Search/SearchByPassportNo?passportNo=${passportNo}`),
    };
};
