import { Router } from "express"
import { pool } from '../dbconexion.js'


const router = Router()

router.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT * FROM employee ')
    res.json(result)
})

export default router