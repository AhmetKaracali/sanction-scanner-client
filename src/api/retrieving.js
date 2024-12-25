const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {
        // 1. GetSearchByScanId
        // This method allows you to access the results of your previous scans with ScanId.
        // The result contains all the details of the scan.
        getSearchByScanId: (scanId) =>
            httpClient.get(`/api/Retrieving/GetSearchByScanId?scanId=${scanId}`),

        // 2. GetSearchesByReferenceNumber
        // This method allows you to quickly obtain the results of a previous scan by using the Reference Number.
        getSearchesByReferenceNumber: (referenceNumber) =>
            httpClient.get(`/api/Retrieving/GetSearchesByReferenceNumber?referenceNumber=${referenceNumber}`),

        // 3. GetBatchSearchResults
        // This method allows you to retrieve Batch Scan results using BatchId.
        getBatchSearchResults: (batchId) =>
            httpClient.get(`/api/Retrieving/GetBatchSearchResults?BatchId=${batchId}`),

        // 4. GetDetailPdfReportByScanId
        // This method allows you to get a detailed PDF report of the scan that was performed.
        getDetailPdfReportByScanId: (scanId) =>
            httpClient.get(`/api/Retrieving/GetDetailPdfReportByScanId?scanId=${scanId}`),

        // 5. GetSummaryPdfReportByScanId
        // This method allows you to get a summarized PDF report of the scan that was performed.
        getSummaryPdfReportByScanId: (scanId) =>
            httpClient.get(`/api/Retrieving/GetSummaryPdfReportByScanId?scanId=${scanId}`),
    };
};
