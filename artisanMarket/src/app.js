const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public');
const homePath = path.resolve(__dirname, './views/index.html');

app.use(express.static(publicPath));

app.get('/', function(req, resp) {
    resp.sendFile(homePath);
})

app.listen(port, () => console.log(`Server is running in port ${port}`));