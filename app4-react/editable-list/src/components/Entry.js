import './Entry.css'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Entry(params) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={params.img} />
        <Card.Body>
          <Card.Title>{params.name}</Card.Title>
          <Card.Text>
            {params.description}
          </Card.Text>
          <Button variant="primary" href={params.link}>Filmweb</Button>
          <Card.Text>
                Rating: {params.rating}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button className='btn btn-danger btn-sm' >Remove</Button>
        </Card.Footer>
      </Card>
    )
}

export default Entry;