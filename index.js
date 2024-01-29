const express = require('express');
const port = 8054;
const app = express();
app.use(express.urlencoded());
// const mongoose = require("./config/monggosconst mongoose = require('mongoose');
const mongoose = require('mongoose')
mongoose.connect(("mongodb+srv://kanabarakshar08:AKSHAR@akshar.7qjb0c5.mongodb.net/Post"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

app.use("/post",require("./routes/API/V1/POST/post"));

app.listen(port, (err) => {
    if (err){
        console.log("Something is Worng");
    } 
    else{
        console.log("Server is running :", port);
    }
});