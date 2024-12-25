const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {
        // 1. GetCustomer
        getCustomerById: (customerId) =>
            httpClient.get(`/api/Customer/GetCustomer?customerId=${customerId}`),
        getCustomerByNumber: (customerNumber) =>
            httpClient.get(`/api/Customer/GetCustomer?customerNumber=${customerNumber}`),

        // 2. AddNewCustomer
        // {
        //   "CustomerNumber": "string",
        //   "CustomerName": "string",
        //   "CustomerTypeId": 0,
        //   "CustomerStatus": 0,
        //   "optionalParameters": [
        //     {
        //       "Key": "string",
        //       "Value": "string"
        //     }
        //   ]
        // }
        addNewCustomer: (customerData) =>
            httpClient.post('/api/Customer/AddNewCustomer', customerData),

        // 3. UpdateCustomer
        updateCustomer: (customerData) =>
            httpClient.post('/api/Customer/UpdateCustomer', customerData),

        // 4. DeleteCustomer
        deleteCustomerById: (customerId) =>
            httpClient.get(`/api/Customer/DeleteCustomer?customerId=${customerId}`),

        deleteCustomerByNumber: (customerNumber) =>
            httpClient.get(`/api/Customer/DeleteCustomer?customerNumber=${customerNumber}`),

        // 5. GetCustomerRiskScore
        getCustomerRiskScoreById: (customerId) =>
            httpClient.get(`/api/Customer/GetCustomerRiskScore?customerId=${customerId}`),

        getCustomerRiskScoreByNumber: (customerNumber) =>
            httpClient.get(`/api/Customer/GetCustomerRiskScore?customerNumber=${customerNumber}`),


        // 6. AddCustomerRiskScore
        // {
        //   "CustomerID": 0,
        //   "CustomerNumber": "string",
        //   "AdditionalRiskScore": 0,
        //   "Description": "string"
        // }

        addCustomerRiskScore: (riskData) =>
            httpClient.post('/api/Customer/AddCustomerRiskScore', riskData),

    };
};
