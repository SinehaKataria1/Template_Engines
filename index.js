const express=require('express')
const path=require('path')
const app=express() 
const port=5000;
const staticpath=path.join(__dirname,'../public');
//to set the view engine
// app.set('view engine','hbs')
// app.set('view engine','pug')
app.set('view engine','ejs')
// app.use(express.static(staticpath));//static website serve

app.get("/",(req,res)=>{
    res.render('EjsFile',{title:"EJS Example",message:"Hello from EJS"})
})
// app.get("/",(req,res)=>{
//     res.render('PugFile',{title:"Pug Example",message:"Hello from pug"})
// })
//template engine route means index.hbs vali file view ho
// app.get("/",(req,res)=>{
//     res.render('index',{engineName:"Handlebars"})// us file ka data dikhao ye purpose h isline ka
// })
app.get("/",(req,res)=>{
    res.send("Hello from express server")
})
app.listen(port,()=>{
    console.log(`listening port on ${port} `);
})


















// const {add,sub,mul,div}=require('./Dmas')
// import { addition } from './Esix.mjs';
// const dmas=(a,b)=>{
//     console.log(`Addition:${add(a,b)}`);
//     console.log(`Subtraction:${sub(a,b)}`);
//     console.log(`Multiplication:${mul(a,b)}`);
//     console.log(`Division:${div(a,b)}`);
//     console.log("Add:",addition(a,b));
// }
// dmas(10,2);
// console.log("Add:",addition(10,2));
//To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//This file is being treated as an ES module because it has a '.js' file extension
// import fs from 'fs'
// import {data} from './ReadFile.js'
// fs.readFile('read.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     else console.log(data)
// }) 
// console.log(data);

//Writing
// fs.writeFile('read.txt','sineha kataria',(err)=>{//asyncronous
//     if(err)
//         console.log(err)
//     else
//     console.log('file written successfully')
// })
// fs.readFile('read.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//         else console.log(data)
// })
// fs.writeFileSync('read.txt','sineha ');//syncronous
// fs.readFile('read.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//         else console.log(data)
// })

// //appendtext
// fs.appendFile('read.txt','\nAppended text',(err)=>{//asyncronous append
//     if(err)
//      console.log(err)
//   console.log("append txt successfully")
// })

// fs.readFile('read.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//         else console.log(data)
// })
// fs.appendFileSync('read.txt','\nappend2')

// fs.readFile('read.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//         else console.log(data)
// })

//Create Directory
// fs.mkdir('Directory',(err)=>{
//     if(err)
//      console.log(err)
//  console.log("Directory created successfully")
// })

//Read directory
//only(./) for outer all files
// fs.readdir('./Directory',(err,files)=>{
//     if(err) console.log(err)
//     else console.log(files)
// })

//remove directory
// fs.rmdir('Directory',(err)=>{
//     if(err)
//      console.log(err)
//    console.log("Directory removed successfully")
// }) 

//Read stream
// let readStream=fs.createReadStream('read.txt','utf8');
// readStream.on('data',(chunk)=>{
//     console.log('Chuck data',chunk);
// })

//Write stream
// const writeStream=fs.createWriteStream('read.txt','utf8');
// writeStream.write('Hello world');
// writeStream.end();
// readStream=fs.createReadStream('read.txt','utf8');
// readStream.on('data',(chunk)=>{
//     console.log('Chuck data:',chunk);
// })
//pipe


// Create a readable stream from input.txt
// const readStream1 = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream to output.txt
// const writeStream1 = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
// readStream1.pipe(writeStream1);

// Listen for the 'finish' event to know when writing is done
// writeStream1.on('finish', () => {
//   console.log('File written successfully from input.txt to output.txt');
// });

// Handle errors
// readStream1.on('error', (err) => {
//   console.error('Error reading input.txt:', err);
// });

// writeStream1.on('error', (err) => {
//   console.error('Error writing to output.txt:', err);
// });
