import express from "express";
import { postFiles, getFiles} from "./routes/api.mjs"
import { settingsRouter } from './routes/settingsAPI.mjs'

//const PORT = system.env.PORT || 8080;
const PORT = 8081;
const app = express();


app.use(express.static('public'))

app.use('/postFile', postFiles);
app.use('/getFiles', getFiles);
app.use('/settings', settingsRouter);

app.get('/', (req, res) => {
  res.send('Hello Worlds');
})



app.listen(PORT, () => {
  console.log('Server is running')
})