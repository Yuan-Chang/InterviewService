const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json());

require('./routes/songRoutes')(app);

const PORT = process.env.PORT || 10301;
app.listen(PORT);
