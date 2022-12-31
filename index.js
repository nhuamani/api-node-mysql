import express from 'express'


const app = express()

app.get('/employee', (req, res) => res.send('obteniendo empleados'))
app.post('/employee', (req, res) => res.send('creando empleados'))
app.put('/employee', (req, res) => res.send('actualizando empleados'))
app.delete('/employee', (req, res) => res.send('eliminando empleados'))

app.listen(3000)
