const express = require('express');
const app = express();
const port = 4000;


// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use('/hello', (req, res)=> {
    const data = {
        message: 'Hello Saquelain Mokhtar',
    };
    res.json(data);
})

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`);
});