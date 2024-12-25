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

        // 3. SearchByDocument
        // With this method, searches can be performed by filling in information from an official document, such as
        // a passport or ID, into the required fields.
        searchByDocumentNumber: (documentNumber) =>
            httpClient.post(`/api/Search/SearchByDocumentNumber?documentNumber=${documentNumber}`),

        // 4. SearchByPassport
        // This method allows you to search for real persons using their passport numbers.
        searchByPassportNo: (passportNo) =>
            httpClient.post(`/api/Search/SearchByPassportNo?passportNo=${passportNo}`),
    };
};
