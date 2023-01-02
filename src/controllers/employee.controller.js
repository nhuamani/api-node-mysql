import { pool } from '../dbconexion.js'


export const getEmployees = (req, res) => res.send('obteniendo empleados')

export const createEmployee = (req, res) => {
    // pool.query('INSERT INTO employee (name, salary) VALUES(?,?)', [])
    console.log(req.body)
    res.send('POST success')
}

export const updateEmployee = (req, res) => res.send('actualizando empleados')

export const deleteEmployee = (req, res) => res.send('eliminando empleados')