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

    let output = {row:-1, column:-1};
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/abbey/Downloads/download.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === "Banana") {
                output.row = rowNumber;
                output.column = colNumber;       
            }
        })
    })


    // update file
    const cell = worksheet.getCell(output.row, output.column);
    cell.value = "Grapes";
    await workbook.xlsx.writeFile("C:/Users/abbey/Downloads/download.xlsx");
}

readExcel();