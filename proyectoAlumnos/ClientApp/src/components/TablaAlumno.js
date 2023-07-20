import { Button, Table} from "reactstrap"

const TablaAlumno = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarAlumno }) => {

    const enviarDatos = (alumno) => {
        setEditar(alumno)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th class="link-primary">ID</th>
                    <th class="link-primary">Nombre</th>
                    <th class="link-primary">Apellido</th>
                    <th class="link-primary">Materia</th>
                    <th class="link-primary">Calificacion</th>
                    <th class="link-primary">Administrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.idAlumno}>
                                    <td>{item.idAlumno}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.materia}</td>
                                    <td>{item.calificacion}</td>
                                    <td>
                                        <Button color="info" outline="true" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                        <Button outline color="danger" size="sm" onClick={() => eliminarAlumno(item.idAlumno)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaAlumno;