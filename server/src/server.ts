import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/dbConfig';
import shortUrl from "./routes/shortUrl"
dotenv.config()
connectDb()

const app = express();
const PORT = process.env.PORT || 5001

//Middlewares
app.use(express.json()) //Parsing JSON Data
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use("/api/", shortUrl)

app.listen(PORT, () => {
    console.log(`Server is Listening on PORT ${PORT}`)
})

