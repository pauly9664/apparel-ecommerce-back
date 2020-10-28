// const pdf =require('pdf').pdf
// const fs = require('fs');

// var doc = new pdf();
// var imgData = '/src/p20.jpg'
// // doc.setFontSize(22);
// doc.addImage(imgData, 'JPG', 15,40,80,80)
// doc.text(30,30, 'INVOICE')
// doc.text(20, 20, 'This is cool af');

// doc.setProperties({
//     title: 'Basic pdf file',
//     subject: 'Your',
//     creator: 'Pau',
//     keywords: 'Maths'
// })

// var filename = 'da.pdf';
// fs.writeFile(filename, doc.output(), function(err, data){
//     if(err){
//         console.log('Haijawork',err)
//     }
// console.log("file iko", data);
// })
// const pdfDocument =require('pdfkit');
// const fs = require('fs');

// var doc = new pdfDocument();
// var curr = Date.now();
// doc.pipe(fs.createWriteStream('./invoices/paulo.pdf'));
// // var imgData = '/src/p20.jpg'
// // doc.setFontSize(22);
// // doc.addImage(imgData, 'JPG', 15,40,80,80)
// doc.text('INVOICE DETAILS', 30,30 )
// doc.text('This is cool af, i mean pdfkit', 30,30);
// doc.end();

// doc.setProperties({
//     title: 'Basic pdf file',
//     subject: 'Your',
//     creator: 'Pau',
//     keywords: 'Maths'
// })

