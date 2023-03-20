import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
  return (
    <Form className='text-center m-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Descripcion </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar 
      </Button>
    </Form>
  );
}

export default Contacto;