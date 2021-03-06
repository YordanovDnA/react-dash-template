import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  //Declare the states
  const [email, setEmail] = useState();

  //On submit
  const onSubmit = (event) => {
    event.preventDefault();
    //Write your validation and password reset logic here
    console.log("Email: ", email);
  };

  //Render the component
  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5 bg-dark">
                  <div className="card-header">
                    <h3 className="text-center text-light font-weight-light my-4">
                      Password Recovery
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="small mb-3 text-warning">
                      Enter your email address and we will send you a link to
                      reset your password.
                    </div>
                    <form>
                      <div className="form-group">
                        <label
                          className="text-light small mb-1"
                          htmlFor="inputEmailAddress"
                        >
                          Email
                        </label>
                        <input
                          onChange={(event) =>
                            setEmail(event.currentTarget.value)
                          }
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <Link className="small" to="/login">
                          Return to login
                        </Link>
                        <button
                          onClick={(event) => onSubmit(event)}
                          className="btn btn-info"
                        >
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    <div className="small">
                      <Link to="/register">Need an account? Sign up!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;
