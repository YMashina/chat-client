import React, { useRef } from "react";
import "./Login.module.scss";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";
import { v4 } from "uuid";

const Login = ({ onIdSubmit }) => {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(inputRef.current.value);
    onIdSubmit(inputRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(v4());
  };

  return (
    <Container className="align-items-center d-flex container-height">
      <Form className="w-100" onSubmit={handleFormSubmit}>
        <FormGroup className="mb-2">
          <FormLabel>Enter your ID</FormLabel>
          <FormControl ref={inputRef} placeholder={"Enter your ID"} required />
        </FormGroup>
        <Button className="me-2" type={"submit"} variant="outline-primary">
          Log in
        </Button>
        <Button onClick={createNewId} variant="outline-secondary">
          Generate a new ID
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
