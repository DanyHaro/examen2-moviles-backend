import { pool } from '../database'

//// ALUMNOS
export const readAllAlumno = async(req, res) => {
    try {
        const response = await pool.query('select *from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const readAlumno = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from alumno where idalumno=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const createAlumno = async(req, res) => {
    try {
        const { nombre, apellidos, direccion,telefono,idescuela } = req.body;
        await pool.query('insert into alumno (nombre, apellidos, direccion,telefono,idescuela) values($1,$2,$3,$4,$5)', [nombre, apellidos, direccion,telefono,idescuela]);
        
        return res.status(200).json(
            `Alumno ${ nombre } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}


export const deleteAlumno = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from alumno where idalumno=$1', [id]);
        return res.status(200).json(
            `Alumno ${ id } Se ha eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const updateAlumno = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellidos, direccion,telefono,idescuela } = req.body;
        await pool.query('update alumno set nombre=$1, apellidos=$2, direccion=$3,telefono=$4, idescuela=$5 where idalumno=$6', [nombre, apellidos, direccion,telefono,idescuela, id]);
        return res.status(200).json(
            `Alumno ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}



///// ESCUELA


export const readAllEscuela = async(req, res) => {
    try {
        const response = await pool.query('select *from escuela');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const readEscuela = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from escuela where idescuela=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}


export const createEscuela = async(req, res) => {
    try {
        const { nombre } = req.body;
        await pool.query('insert into escuela (nombre) values($1)', [nombre]);
        
        return res.status(200).json(
            `Escuela ${ nombre } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}


export const deleteEscuela = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from escuela where idescuela=$1', [id]);
        return res.status(200).json(
            `Escuela ${ id } Se ha eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const updateEscuela = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
        await pool.query('update escuela set nombre=$1 where idescuela=$2', [nombre, id]);
        return res.status(200).json(
            `Escuela ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}