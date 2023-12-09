const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: 'Message from server'
    });
});

app.listen(4030, () => {
    console.log('Server is working on port 4030 nodeapp444');
})
