import React from 'react'
const { foundNum, inRange } = require('./Validation')

export default function CheckOut(props) {


    // changing the status of Student  from PRESENT to LEFT
    const checkStudentOut = (event) => {

        event.preventDefault();
        const rollNo = event.target.rollNo.value;
        event.target.rollNo.value = ""
        // Before updating  given student's status validations are run
        if (!inRange(rollNo)) {
            return
        }
        if (foundNum(rollNo, props.studentsArray)) {
            alert("Oops! No Student with that Roll Number Present :( ")
            return
        }
        let d = new Date()
        let hours = d.getHours()
        let minutes = d.getMinutes()
        props.removeStudent(rollNo, hours, minutes)

    }

    return (
        <div className="border border-end-0 border-info text-bg-info p-3 container d-flex flex-column justify-content-evenly">
            <h2 className='text-center'>Student Check-out</h2>
            <h6 className='text-center text-muted'>Use me to Check-out  :D </h6>
            <form onSubmit={checkStudentOut} className='myForm needs-validation' action="" noValidate>
                <div className="form-floating">
                    <input type="number" className="form-control" id="rollNo" placeholder="Ex: 23" />
                    <label htmlFor="floatingRollNo">Roll Number</label>
                </div>
                <div className="div">
                    <button type="submit" className="btn btn-info my-3">Leave</button>
                </div>
            </form>
        </div>

    )
}
