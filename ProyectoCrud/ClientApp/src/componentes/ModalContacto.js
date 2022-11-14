import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter,Button } from "reactstrap"

const ModeloContacto = {
    idContacto :0,
    nombre: "",
    apellido:"",
    correo: "",
    telefono:""
    }

const ModalContacto = ({mostrarModal, setMostrarModal,guardarContacto, editar,setEditar,editarContacto }) => {

    const [contacto, setContacto] = useState(ModeloContacto);

    const actualizarDato = (e) => {
        console.log(`${e.target.name} : ${e.target.value}`)
            setContacto(
                {
                    ...contacto,
                    [e.target.name]: e.target.value

                    }
            )
    }
    const enviarDatos = () => {
        if (contacto.idContacto === 0) {
            guardarContacto(contacto)
        } else {
          
            editarContacto(contacto)
        }
        setContacto(ModeloContacto)
    }

    useEffect(() => {

        if (editar != null) {
            setContacto(editar)
        } else {
            setContacto(ModeloContacto)
        }
    },[editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }
    return (
        <Modal isOpen={!mostrarModal}>
            <ModalHeader>
                {contacto.idContacto == 0 ? "Nuevo Contacto": "Editar Contacto" }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={contacto.nombre} />
                    </FormGroup>  
                    <FormGroup>
                        <Label>Apellido</Label>
                        <Input name="apellido" onChange={(e) => actualizarDato(e)} value={contacto.apellido} />
                    </FormGroup> 
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizarDato(e)} value={contacto.correo} />
                    </FormGroup> 
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={contacto.telefono} />
                    </FormGroup> 
                    
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}  >Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal } >Cerrar</Button>
            </ModalFooter>
        </Modal>
        )
}

export default ModalContacto