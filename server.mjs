import express from "express";

//const PORT = system.env.PORT || 8080;
const PORT = 8080;
const app = new express();

const settingsRouter = express.Router();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello Worlds');
})


app.get('/settings', (req, res) => {
  res.send("settings");
})

app.use('/settings', settingsRouter);


app.listen(PORT, () => {
  console.log('Server is running')
})