const express = require("express")
const cors = require("cors")

const generateRoute = require("./routes/generate")
const chatRoute = require("./routes/chat")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/generate", generateRoute)
app.use("/chat", chatRoute)

app.listen(5000, () => {
console.log("Server running on port 5000")
})