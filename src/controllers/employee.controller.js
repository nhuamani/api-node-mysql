import { pool } from '../dbconexion.js'


export const getEmployees = async (req, res) => {
    const [data] = await pool.query('SELECT * FROM employee')
    res.json(data)
}

export const getEmployee = async (req, res) => {
    const [data] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    
    if(data.length <= 0) return res.status(404).json({
        message: 'Employee not found'
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

export const updateEmployee = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body
    const [result] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?', [name, salary, id])

    if(result.affectedRows === 0)return res.status(404).json({
        message: 'Employee not found'
    })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])
}

export const deleteEmployee = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'
    })

    res.sendStatus(204)
}