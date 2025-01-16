const fs = require("fs");

//Sync... call
// fs.writeFileSync('./test.txt','Hey there');


//Async...call
// fs.writeFile('./test.txt','Hey there Async', (err) => {});


//sync...call
// const result = fs.readFileSync('./contacts.txt', 'utf8');
// console.log(result);

//Async..call
// fs.readFile("./contects.txt", "utf8",(err, result) =>{
//     if(err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// } );



// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());


fs.appendFileSync("./text.txt", `Hey there\n`);