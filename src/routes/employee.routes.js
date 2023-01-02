import { Router } from 'express'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employee.controller.js'


const router = Router()

router.get('/employee', getEmployees)
router.get('/employee/:id', getEmployee)
router.post('/employee', createEmployee)
router.put('/employee/:id', updateEmployee)
router.delete('/employee/:id', deleteEmployee)

export default router