import express from 'express'
import employeeRoutes from './routes/employee.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeeRoutes)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Page not found'
    })
})

app.listen(3000)
