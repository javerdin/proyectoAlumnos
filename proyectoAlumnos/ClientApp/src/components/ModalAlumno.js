import {useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloAlumno = {
    idAlumno: 0,
    nombre: "",
    apellido: "",
    materia: "",
    calificacion: ""
}

const ModalAlumno = ({ mostrarModal, setMostrarModal, guardarAlumno, editar, setEditar, editarAlumno }) => {

    const [alumno, setAlumno] = useState(modeloAlumno);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setAlumno(
            {
                ...alumno,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (alumno.idAlumno == 0) {
            guardarAlumno(alumno)
        } else {
            editarAlumno(alumno)
        }
    }

    useEffect(() => {
        if (editar != null) {
            setAlumno(editar)
        } else {
            setAlumno(modeloAlumno)
        }


    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }
    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {alumno.idAlumno == 0 ? "Nuevo Alumno" : "Editar Alumno"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido</Label>
                        <Input name="apellido" onChange={(e) => actualizaDato(e)} value={alumno.apellido} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Materia</Label>
                        <Input name="materia" onChange={(e) => actualizaDato(e)} value={alumno.materia} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Calificacion</Label>
                        <Input name="calificacion" onChange={(e) => actualizaDato(e)} value={alumno.calificacion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAlumno;