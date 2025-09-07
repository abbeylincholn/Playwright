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

// read file
async function readExcel() {    
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/abbey/Downloads/download.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === "Apple") {
                console.log(rowNumber);
                console.log(colNumber);

            }
        })
    })


    // update file
    const cell = worksheet.getCell(3,2);
    cell.value = "Pineapple";
    await workbook.xlsx.writeFile("C:/Users/abbey/Downloads/download.xlsx");
}

readExcel();