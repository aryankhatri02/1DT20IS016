const express = require('express');
const axios = require('axios')


const app = express();

const BASE_URL = "http://20.244.56.144";

app.get('/',(req,res)=>{
    res.json({message:"Hello Workd"})
})
app.get('/prime',async(req,res)=>{
       
            const response = await axios.get('http://20.244.56.144/numbers/primes');
            const primeN = response.data;
            console.log(primeN);
            res.json(primeN);
       
});

app.get('/even',async (req,res)=>{
    const response = await axios.get('http://20.244.56.144/numbers/even');
    const numbers = response.data;
   
    res.json(numbers);
});
app.get('/odd',async (req,res)=>{
    const response = await axios.get('http://20.244.56.144/numbers/odd');
    const numbers = response.data;
    res.json(numbers);
});

app.get('/fibo',async (req,res)=>{
    const response = await axios.get('http://20.244.56.144/numbers/fibo');
    const numbers = response.data;
    console.log(primeN);
    res.json(numbers);
    
});

app.get('/numbers',async(req,res)=>{
    const urls = req.query.url;
    try{
        const requests = urls.map(url => axios.get(url));
        
        const response = await Promise.all(requests);
        const responseData = response.map(response=>response.data.numbers);
        // console.log(responseData)
        res.json({responseData});
    }catch(err){
            res.status(500).json({message:"Error"});
    }
})
app.listen(3000,(req,res)=>{
    console.log("Hello World")
})
