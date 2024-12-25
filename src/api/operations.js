const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {


        // 1. getMyOrganizationUsers

        getMyOrganizationUsers: () =>
            httpClient.get('/api/Operations/GetMyOrganizationUsers'),

        // 2. AssignUserToSearch

        assignUserToSearch: (scanId, userGuid) =>
            httpClient.post('/api/Operations/AssignUserToSearch', {
                ScanId: scanId,
                UserGuidId: userGuid,
            }),

        // 3. SetSearchMatchStatus

        setSearchMatchStatus: (scanId, statusId) =>
            httpClient.post('/api/Operations/SetSearchMatchStatus', {
                ScanId: scanId,
                StatusId: statusId,
            }),

        // 4. SetSearchRiskLevel

        setSearchRiskLevel: (scanId, riskLevelId) =>
            httpClient.post("/api/Operations/SetSearchRiskLevel", {
                ScanId: scanId,
                RiskLevelId: riskLevelId,
            }),

        // 5. GetMemoListByScanId

        getMemoListByScanId: (scanId) =>
            httpClient.get(`/api/Operations/GetMemoListByScanId?scanId=${scanId}`),


        // 6. AddMemoToSearch

        addMemoToSearch: (scanId, memo) =>
            httpClient.post('/api/Operations/AddMemoToSearch', {
                ScanId: scanId,
                Memo: memo,
            }),

        // 7. RemoveMemoByScan

        removeMemoByScan: (memoId) =>
            httpClient.get(`/api/Operations/RemoveMemoByScan?memoId=${memoId}`),


        // 8. RemoveScan
        removeScan: (scanId) =>
            httpClient.post(`/api/Operations/RemoveScan?scanId=${scanId}`),


        // 9. SearchAddToSafeList

        searchAddToSafeList: (scanId) =>
            httpClient.post('/api/Operations/SearchAddToSafeList', {
                ScanId:  scanId,
            }),

        // 10. DeleteFromSafeListByReferenceNumber

        deleteFromSafeListByReferenceNumber: (referenceNumber) =>
            httpClient.post('/api/Operations/DeleteFromSafeListByReferenceNumber', {
                ReferenceNumber: referenceNumber,
            }),
    };
};
