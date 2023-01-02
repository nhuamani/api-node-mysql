import { Router } from "express"


const router = Router()

router.get('/employee', (req, res) => res.send('obteniendo empleados'))
router.post('/employee', (req, res) => res.send('creando empleados'))
router.put('/employee', (req, res) => res.send('actualizando empleados'))
router.delete('/employee', (req, res) => res.send('eliminando empleados'))

export default router