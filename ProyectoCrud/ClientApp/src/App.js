
import { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, Button, CardBody } from "reactstrap"
import ModalContacto from "./componentes/ModalContacto"
import TablaContacto from "./componentes/TablaContacto"
const App = () => {

    const [contactos, setContactos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null);
    const MostrarContactos = async () => {

        const response = await fetch("api/contacto/Lista")
        if (response.ok) {
            const data = await response.json()
            setContactos(data)
        } else {
            console.log("Error en la lista")
        }
    }
    useEffect(() => {
        MostrarContactos()
    }, [])

    const guardarContacto = async (contacto) => {
        const response = await fetch("api/contacto/Guardar", {
            method: "POST",
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal)
            MostrarContactos()
        }
    }



    const editarContacto = async (contacto) => {
        const response = await fetch("api/contacto/Editar", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal)
            MostrarContactos()
        }
    }




    const eliminarContacto = async (id) => {
        var respuesta = window.confirm("Desea eliminar el contato?")
        if (!respuesta) {
            return
        }
        const response = await fetch(`api/contacto/Eliminar/${id}`, {
            method:"DELETE"
            })

        if (response.ok) {
            MostrarContactos()
        }

    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm = "12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)} >Nuevo Contacto</Button>
                            <hr></hr>
                            <TablaContacto data={contactos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                editar={editar}
                                setEditar={setEditar}
                                editarContacto={editarContacto}
                                eliminarContacto={eliminarContacto}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalContacto
               mostrarModal={!mostrarModal}
                setMostrarModal ={setMostrarModal}
                guardarContacto={guardarContacto}
                editar={editar}
                setEditar={setEditar}
                editarContacto={editarContacto}
            />
        </Container>
        )
}

export default App