import express from "express"
import mongoose from "mongoose"
import routes from "./routes"
import cors from "cors"

const app = express()
mongoose.connect(
    "mongodb+srv://omnistack:omnistack@omnistack10-zojvf.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(5050)
