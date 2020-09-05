import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send();
    
});

app.listen(5300, ()=>{
    console.log('SERVER RUN IN PORT 5300');
});