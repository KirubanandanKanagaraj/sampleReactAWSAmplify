import React, { Component } from "react";
import "./Home.css";

import { Auth, API } from "aws-amplify";

export default class Home extends Component {
  lsitAttributes = () => {
    Auth.currentAuthenticatedUser().then(user => {
      Auth.userAttributes(user).then(_attributes => {
        console.log(_attributes);
      });
    });
  };

  updateCity = () => {
    Auth.currentAuthenticatedUser().then(user => {
      Auth.updateUserAttributes(user, {
        "custom:city": "Lastname"
      });
    });
  };

  updateDataOnDynamoDB = () => {
    let apiName = "userInfo"; // replace this with your api name.
    let path = "/user-info"; //replace this with the path you have configured on your API
    let myInit = {
      body: {
        operation: "create",
        payload: {
          TableName: "zee-user-info",
          Item: {
            "user-id": "kiruthi",
            email: "aaaa@r.com",
            city: "cbe"
          }
        }
      }, // replace this with attributes you need
      headers: {
        //Authorization: user.signInUserSession.idToken.jwtToken
      } // OPTIONAL
    };

    API.post(apiName, path, myInit)
      .then(response => {
        alert("Success Insertion!");
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          {this.props.isAuthenticated ? (
            <div>
              <p>
                <button
                  className="btn btn-primary"
                  onClick={this.lsitAttributes()}
                >
                  List Attributes
                </button>
              </p>
              <p>
                <button className="btn btn-primary" onClick={this.updateCity()}>
                  Update City
                </button>
              </p>
              <p>
                <button
                  className="btn btn-primary"
                  onClick={this.updateDataOnDynamoDB()}
                >
                  Update DB Values
                </button>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
