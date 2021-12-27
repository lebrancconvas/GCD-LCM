const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send("Server is OK.");
})

app.listen(PORT, () => {
    console.log(`Server Listening Port: ${PORT}`);
})