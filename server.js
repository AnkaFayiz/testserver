// Import Modules
const express = require('express');
const view = require('../views/index.ejs');
const router = require('./routes');
const app = express();

app.use('view engine', 'ejs')

// PORT 
const PORT = process.env.PORT || 8000;


app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
