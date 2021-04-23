const app = require('express')();

const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Server Running on ${PORT}`)

);

app.get('/names',(req,res) => {
    res.send("Hey Guys Welcome to Node JS lets Learn Node")
});