// server dependencies
const express = require('express')
const app  = express()
const router = require('./modules')
const cors = require('cors')


// express middleware goes here
app.use(express.json())
app.use(cors())

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})





// database initialization goes here
// this will ensure the database loaded first before the server




// root route
app.get('/',(req,res) => {
    res.send('Hello world')
})

// modular route
app.use('/api', router)



app.listen(3000, () => {console.log('server running on port 3000')})



// gracefull shutdown
process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        debug('HTTP server closed')
    })
})
