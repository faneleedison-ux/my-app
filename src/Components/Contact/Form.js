import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <form>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput id="form6Example1" label="First name" />
        </MDBCol>
        <MDBCol>
          <MDBInput id="form6Example2" label="Last name" />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass="mb-4" id="form6Example3" label="Company name" />

      <MDBInput
        wrapperClass="mb-4"
        type="email"
        id="form6Example5"
        label="Email"
      />
      <MDBInput
        wrapperClass="mb-4"
        type="tel"
        id="form6Example6"
        label="Phone"
      />

      <MDBInput
        wrapperClass="mb-4"
        textarea
        id="form6Example7"
        rows={4}
        label="How Can We Help?"
      />

      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form6Example8"
        label="Susbcribe To Newsletter?"
        defaultChecked
      />

      <Link to="/submit">
        <Button className="mb-4" type="submit" block>
          SUBMIT
        </Button>
      </Link>
    </form>
  );
}