import express from "express";
import cors from "cors";


const app = express()
const port = 8000

app.use(cors({
  origin: "http://localhost:5173"
}));


app.get('/api/v1', (req, res) => {
    res.json({
        message: "Hello, React. I am from Express!"
    })
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})