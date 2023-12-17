import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3092);

import { handler } from "./front/build/handler.js"
app.use(handler);


app.listen(app.get('port'), () => {
    console.log(`server running in port ${app.get('port')}`);
})