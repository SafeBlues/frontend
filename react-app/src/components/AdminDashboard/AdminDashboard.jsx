import React from "react";
import "./AdminDashboard.css";
import checkAuth from "helpers/checkAuth.js";
import axios from "axios";
import { getBaseURL } from "helpers/GetBaseURL.js"


export default class AdminDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {loggedIn: false}
        this.checkAuth = this.checkAuth.bind(this)
        // checkAuth()
    }

    checkAuth(){
        console.log("test")
        const res = axios
          .get(`${getBaseURL()}/v1/validate-admin`, { withCredentials: true })
          .then((res) => {
              console.log(res)
            if (res.data.status === 200){
                this.setState({loggedIn: true})
            } else {
                console.log("Not logged in!")
            }

          })
          .catch((error) => {
              return(false)
          });
    }

    componentDidMount(){
        checkAuth()
    }

    displayLoggedIn(){
        if (this.state.loggedIn){
            return(
              <div>
                <p>Currently logged in.</p>
              </div>
              )
        } else {
            return(
                <p>Please log into an admin account to access this page. <br/>You will have to contact a super-admin (Josh or Aapeli) to alter your account to admin status.</p>
            )
        }
    }
    render(){
        return(
        <div>
            <h1>
                welcome to the admin dashboard
            </h1>
                {this.displayLoggedIn()}
        </div>
        )
    }
}