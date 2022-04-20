import "./Entry.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Entry({ entry, onRemove }) {
  const { id, data } = entry;
  const { img, name, description, rating, link } = data;
  const EmptyStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fillRule="evenodd"
        d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"
      ></path>
    </svg>
  );
  const FullStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fillRule="evenodd"
        d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
      ></path>
    </svg>
  );

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          {Array(10)
            .fill(EmptyStar())
            .map((el, index) => (index < rating ? FullStar() : el))}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" href={link} className="btn-sm m-1">
          Filmweb
        </Button>

        <Button
          className="btn btn-danger btn-sm m-1"
          onClick={() => {
            onRemove(id);
          }}
        >
          Remove
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Entry;
