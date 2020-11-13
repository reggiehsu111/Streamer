const express = require("express");
const UploadPageRouter = require("./api/UploadPageAPI");
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require("path");

const app = express();

app.use("/UploadPage", UploadPageRouter);
app.use(cors());
app.use(express.static(path.join(__dirname, '../../../client', 'dist')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../../../client','dist','index.html'));
});
app.listen(port, () => console.log("Backend server live on " + port));

module.exports = app;
