# Sanction Scanner API Client Node.js

SanctionScanner firmasının API koleksiyonu dökümanı baz alınarak en çok kullanılacak bazı endpointler Node.js paketi 
olarak hazırlanmıştır.

Diğer dillerde entegrasyon ve özelleştirilmiş çözümler için akaracali58@gmail.com adresine mail atabilirsiniz.


## Kurulum
```bash
npm install sanction-scanner-client
```
## Kullanım
```javascript
const sanctionscanner = require('sanctionscanner');

const client = sanctionscanner("API_URL", "USERNAME", "PASSWORD");

// Kimlik No ile risk raporu sorgulaması
const scan = await client.search.searchByIdentity("ID_NUMBER");
console.log(scan.data)

// Daha önce yapılan bir sorguyu, ScanId ile getirme.
const scan_result = await client.retrieving.getSearchByScanId("SCAN NUMBER");
console.log(scan_result.data)

```

