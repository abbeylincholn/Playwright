const ExcelJs = require('exceljs');

// const workbook = new ExcelJs.Workbook();
// workbook.xlsx.readFile("C:/Users/abbey/Downloads/download.xlsx").then(function() {
//     const worksheet = workbook.getWorksheet('Sheet1');
//     worksheet.eachRow((row, rowNumber) => {

//         row.eachCell((cell, colNumber) => {

//             console.log(cell.value);
//         })
//     })
// });    

// or 

async function readExcel() {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/abbey/Downloads/download.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            console.log(cell.value);
        })
    })
}

readExcel();