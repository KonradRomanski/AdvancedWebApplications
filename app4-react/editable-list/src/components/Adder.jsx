import { useState } from "react";
import "./Entry.css";
import { Card, Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Entry({ add }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const onAdd = () =>
    add({
      name: title,
      description,
      img: image,
      rating,
      link,
    });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Add a new item</Card.Title>
        <Form
          className="d-flex flex-column gap-4 p-2"
          onSubmit={(e) => {
            e.preventDefault();
            onAdd();
          }}
        >
          <FormControl
            type="text"
            placeholder="Title"
            className="me-2"
            aria-label="Title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <FormControl
            type="text"
            placeholder="Description"
            className="me-2"
            aria-label="Description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          <FormControl
            type="number"
            placeholder="Rating"
            className="me-2"
            aria-label="Rating"
            value={rating}
            onChange={(ev) => setRating(ev.target.value)}
          />
          <FormControl
            type="link"
            placeholder="Image"
            className="me-2"
            aria-label="Image"
            value={image}
            onChange={(ev) => setImage(ev.target.value)}
          />
          <FormControl
            type="link"
            placeholder="Link"
            className="me-2"
            aria-label="Link"
            value={link}
            onChange={(ev) => setLink(ev.target.value)}
          />
          <Button variant="outline-success" onClick={onAdd}>
            Add
          </Button>
          {/* <Button variant="primary" href={params.link}>Add</Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Entry;
