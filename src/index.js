import express from 'express'
import employeeRoutes from './routes/employee.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(indexRoutes)
app.use(employeeRoutes)

app.listen(3000)
