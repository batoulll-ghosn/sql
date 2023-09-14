const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.send('Welcome to the API route!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
