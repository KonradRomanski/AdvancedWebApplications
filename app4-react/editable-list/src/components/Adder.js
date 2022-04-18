import './Entry.css'
import { Card, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Entry(params) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={params.img} />
        <Card.Body>
          <Card.Title>Add a new item</Card.Title>
        <Form className="d-flex flex-column gap-4 p-2">
                <FormControl
                type="text"
                placeholder="Title"
                className="me-2"
                aria-label="Title"
                />
                <FormControl
                type="text"
                placeholder="Description"
                className="me-2"
                aria-label="Description"
                />
                <FormControl
                type="number"
                placeholder="Rating"
                className="me-2"
                aria-label="Rating"
                />
                <FormControl
                type="link"
                placeholder="Image"
                className="me-2"
                aria-label="Image"
                />
                <FormControl
                type="link"
                placeholder="Link"
                className="me-2"
                aria-label="Link"
                />
                <Button variant="outline-success">Add</Button>
          {/* <Button variant="primary" href={params.link}>Add</Button> */}
            </Form>
        </Card.Body>
      </Card>
    )
}

export default Entry;