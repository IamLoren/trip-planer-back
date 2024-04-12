import express from 'express';


const app = express();

app.get('/', (req, res) => {<h1>Answer from server</h1>});

app.listen(3000, () => {console.log('Server is running on port 3000')});

