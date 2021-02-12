const express = require("express");
const cors = require('cors');

const app =express ();
app.use(cors());

app.get('/', (req,res) => {
    console.log('its working')
    res.send({exampleMessage: "react client connected to the Express server!"})
})






const port = process.env.PORT || 9000;
app.listen(port, () => 
console.log(`listening on port ${port}`));
