import React from "react"
import "./DisplayNotAuth.css"

function DisplayNotAuth(props){
    return(
        <div className="DisplayNotAuthContainer">
            <p>You are not authorized to view this page.</p>
            <p><a href="/login">Please sign in here</a></p>
        </div>
    )
}

export default DisplayNotAuth;