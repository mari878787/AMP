const fs = require('fs');
const xlsx = require('xlsx');

try {
  const wb = xlsx.readFile('Website URL Structure.xlsx');
  wb.SheetNames.forEach(sheet => {
    console.log('=== SHEET: ' + sheet + ' ===');
    const sheetData = xlsx.utils.sheet_to_json(wb.Sheets[sheet]);
    console.log(JSON.stringify(sheetData, null, 2));
  });
} catch (err) {
  console.error(err);
}
