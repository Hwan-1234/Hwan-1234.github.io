import express from "express";
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('준비중~');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})