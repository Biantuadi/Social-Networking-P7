const app = require("./app")
const port = process.env.PORT || 3000
app.set("port", port)

// Create a server
const http = require("http")
const server = http.createServer(app)


// Start the server
server.listen(port)
console.log(`Server running on port ${port}`)

