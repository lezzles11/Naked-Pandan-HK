import React from "react"

import Layout from "../components/layout"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact"

const FormPage = () => {
  return (
    <MDBCard>
      <MDBCardBody>
        <form>
          <p className="h4 text-center py-4">Login</p>
          <label
            htmlFor="defaultFormCardNameEx"
            className="grey-text font-weight-light"
          >
            Email
          </label>
          <input
            type="text"
            id="defaultFormCardNameEx"
            className="form-control"
          />
          <br />
          <label
            htmlFor="defaultFormCardEmailEx"
            className="grey-text font-weight-light"
          >
            Password
          </label>
          <input
            type="email"
            id="defaultFormCardEmailEx"
            className="form-control"
          />
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-green" type="submit">
              Login
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  )
}

const LoginPage = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-6 justify-content-center">
          <FormPage />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}

export default LoginPage
