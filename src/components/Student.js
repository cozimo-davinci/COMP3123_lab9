import React from "react";


function Student(props) {
    return (
        <>
            <h3>Student ID: {props.studentID}</h3>
            <h3>Full Name: {props.fname} {props.lname}</h3>
        </>


    )
}

export default Student;