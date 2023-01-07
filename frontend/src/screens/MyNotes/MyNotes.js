import React from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note ?")) {
    }
  };
  return (
    <MainScreen title="Welcome Shridhar">
      <Link to="createnote">
        <Button
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
          className="btn-outline-dark"
        >
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <div className="card   mb-3 " style={{ margin: 20 }}>
          <div
            className="card-header text-white bg-dark"
            style={{ display: "flex" }}
          >
            <span
              style={{
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 20,
              }}
            >
              {note.title}
            </span>
            <Button
              className="btn btn-outline-success mx-2"
              href={`/note/${note._id}`}
            >
              Edit
            </Button>
            <Button
              className="btn btn-outline-danger mx-2"
              onClick={() => deleteHandler(note._id)}
            >
              Delete
            </Button>
          </div>
          <div className="card-body bg-secondary mb-3">
            <h4>
              <Badge className="badge rounded-pill bg-info">
                Category - {note.category}
              </Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer ">Created on - date</footer>
            </blockquote>
          </div>
        </div>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
