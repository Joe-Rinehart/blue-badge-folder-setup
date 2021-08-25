import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  let handleSubmit = (event) => {
      console.log(passwordHash, username)
    event.preventDefault();
    fetch("http://localhost:3001/user/register", {
      method: "POST",
      body: JSON.stringify({
         username: username, passwordHash: passwordHash
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordHash">Password</Label>
          <Input
            onChange={(e) => setPasswordHash(e.target.value)}
            name="passwordHash"
            value={passwordHash}
          />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
