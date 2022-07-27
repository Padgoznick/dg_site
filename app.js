const express = require('express');
const path = require('path');
const app= express();

app.use('/',express.static('./public'));
app.use(express.static("./404_err"));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,"./public/main.html"));
})
app.all('*',(req,res)=>{
    if (req.url.split('/').length-1 >=2){
        res.status(404).redirect("/404")
        return
    }
    res.status(404).sendFile(path.resolve(__dirname,"./404_err/404_index.html"));
    return
})
app.listen(5000,()=>{
    console.log('listning to port 5000');
})