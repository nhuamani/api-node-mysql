import { Router } from 'express'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.controller.js'


const router = Router()

router.get('/employee', getEmployees)
router.post('/employee', createEmployee)
router.put('/employee', updateEmployee)
router.delete('/employee', deleteEmployee)

export default router