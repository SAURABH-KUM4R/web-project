require('dotenv').config();
const PORT = process.env.PORT || 5001;

const app = require('./app.js');

app.listen(PORT, () => {
    console.log(`Server is listning at http://localhost:${PORT}`);
});

