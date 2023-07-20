import React, { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button, input } from "reactstrap"
import ModalAlumno from "./components/ModalAlumno"
import TablaAlumno from "./components/TablaAlumno"

const App = () => {

    const [alumnos, setAlumnos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)
    const [search, setSearch] = useState("")

    const mostrarAlumnos = async () => {
        const response = await fetch("api/alumno/Lista");

        if (response.ok) {
            const data = await response.json();
            setAlumnos(data)
        } else {
            console.log("Error en los datos de la lista")
        }
    }

    useEffect(() => {
        mostrarAlumnos()
    }, [])

    const guardarAlumno = async (alumno) => {

        const response = await fetch("api/alumno/Guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const editarAlumno = async (alumno) => {

        const response = await fetch("api/alumno/Editar", {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    //Se agrego
    const eliminarAlumno = async (id) => {

        var respuesta = window.confirm("Desea eliminar el alumno?")

        if (!respuesta) {
            return;
        }
        const response = await fetch("api/alumno/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarAlumnos();
        }
    }

    //filtrado 
    const searcher =  (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let results =[]
    if (!search) {

        results = alumnos;
    } else {
        results = alumnos.filter((alumnos) =>
            alumnos.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h2 className="text-center link-primary" >Registro de Calificaciones Clase Programacion</h2>
                        </CardHeader>
                        <CardBody>
                            <tr>
                                <Button  size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Registro</Button>
                            </tr>
                            <hr></hr>
                                <td>
                                <input value={search} onChange={searcher} type="text" placeholder='Buscar Alumno' className='form-control' />
                                </td>
                            <hr></hr>
                            <TablaAlumno data={results}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarAlumno={eliminarAlumno}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalAlumno
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarAlumno={guardarAlumno}
                editar={editar}
                setEditar={setEditar}
                editarAlumno={editarAlumno}
            />
        </Container>

    )
}

export default App;