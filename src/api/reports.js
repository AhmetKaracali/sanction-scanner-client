const createHttpClient = require('../utils/httpClient');

module.exports = (baseURL, username, password) => {
    const httpClient = createHttpClient(baseURL, username, password);

    return {
        // 1. GetStatisticsWithDateRange
        // This service allows you to view statistics of scans performed by your organization within the date range
        // that you entered. As a result of the service, the number of scans made in the date range
        // and the number of alarms generated in these scans are returne

        getStatisticsWithDateRange: (startDate, endDate) =>
            httpClient.get(`/api/Reports/GetStatisticsWithDateRange?StartDate=${startDate}&EndDate=${endDate}`),

        // 2. GetMonitoringReportByScanId
        // You can access the Ongoing Monitoring details for a scan that you performed by using this method.

        getMonitoringReportByScanId: (scanId) =>
            httpClient.get(`/api/Reports/GetMonitoringReportByScanId?scanId=${scanId}`),

        // 3. GetMonitoringHistory
        // You can access the ongoing monitoring details as historical for a scan that you performed by using this method.

        getMonitoringHistory: (scanId) =>
            httpClient.get(`/api/Reports/GetMonitoringHistory?scanId=${scanId}`),

        // 4. GetChangedMonitoringsByDate
        // This method allows you to access the details of the change that occurred on a specific date in
        // Ongoing Monitoring scans.

        getChangedMonitoringsByDate: (date) =>
            httpClient.get(`/api/Reports/GetChangedMonitoringsByDate?date=${date}`),
    };
};
