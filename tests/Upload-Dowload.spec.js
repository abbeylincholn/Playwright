const { test, expect } = require('@playwright/test');
const ExcelJs = require('exceljs');

async function writeExcelTest(searchText, replaceText, change, filePath) {    
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');   
  const output = await readExcel(worksheet, searchText);

  // update file (uses your original indexing logic)
  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
  let output = { row: 0, column: 0 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;       
      }
    });
  });
  return output;
}

// update Mango Price to 350
test('Upload - Download excel validation', async ({ page }, testInfo) => {
    const textSearch = 'Mango';
    const updateValue = '350';
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');

  // === your requested snippet ===
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const download = await downloadPromise;                 // capture it
  const filePath = testInfo.outputPath('download.xlsx');  // save to known path
  await download.saveAs(filePath);
  // ==============================

  await writeExcelTest('Mango', 350, { rowChange: 0, colChange: 2 }, filePath);

  await page.locator('#fileinput').click();
  await page.locator('#fileinput').setInputFiles(filePath);

  const textLocator = page.getByText(textSearch)
  const desireRow = await page.getByRole('row').filter({ has: textLocator });
  await expect (desireRow.locator("#cell-4-undefined")).toContainText(updateValue)
});
