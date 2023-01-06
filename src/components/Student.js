import React from 'react'

export default function Student(props) {
    const { rollNo, studentName, checkIn, checkOut } = props
    return (
        // Simply rendering A Student 
        <div className="row  my-1">
            <div className="border border-info m-auto col-2">Roll Number : {rollNo}</div>
            <div className="border border-info m-auto col-6">Name : {studentName}</div>
            <div className="border border-info m-auto col-2">Check In : {checkIn}</div>
            <div className={`border ${checkOut === "PRESENT" ? "bg-success text-light" : "bg-warning"} border-info m-auto col-2`}>Check Out : {checkOut}</div>
        </div>
    )
}
