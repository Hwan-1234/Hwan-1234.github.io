import express from "express";
const app = express();
const port = 8080;


app.get('/', (req, res) => {
	console.log('start');
  return res.send('준비중~');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})