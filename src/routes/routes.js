import { Router } from 'express'

const router = Router();

import * as alumno from '../controller/alumno.controller'

router.get('/getEscuelas', alumno.readAllEscuela); // DA ERROR CUANDO SE COLOCA ENCIMA DE readEscuela
router.get('/', alumno.readAllAlumno);
router.get('/:id', alumno.readAlumno);
router.post('/', alumno.createAlumno);
router.delete('/:id', alumno.deleteAlumno);
router.put('/:id', alumno.updateAlumno);

//Escuela
router.post('/post', alumno.createEscuela);
router.get('/get/:id', alumno.readEscuela);
router.delete('/deleteEscuela/:id', alumno.deleteEscuela);
router.put('/putEscuela', alumno.updateEscuela);



export default router;
