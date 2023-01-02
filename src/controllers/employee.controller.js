import { pool } from '../dbconexion.js'


export const getEmployees = async (req, res) => {
    const [data] = await pool.query('SELECT * FROM employee')
    res.json(data)
}

export const getEmployee = async (req, res) => {
    const [data] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    
    if(data.length <= 0) return res.status(400).json({
        message: 'No se encuentra empleados'
    })
    
    res.json(data[0])
}

export const createEmployee = async (req, res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES(?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const updateEmployee = (req, res) => res.send('actualizando empleados')

export const deleteEmployee = (req, res) => res.send('eliminando empleados')