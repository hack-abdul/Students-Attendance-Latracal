import React from 'react'
const { inRange, foundNum } = require('./Validation')

export default function IsPresent(props) {

    // Rendering result for searching the student
    const checkStudent = (event) => {

        event.preventDefault()
        const rollNo = event.target.rollNo.value
        event.target.rollNo.value = ""
        // Before rendering student status validations are run
        if (!inRange(rollNo)) {
            return
        }
        if (!foundNum(rollNo, props.studentsArray)) {
            alert("The Student (is/was) Present today")
        } else {
            alert("The Student is Absent")
        }

    }

    return (
        <div className="border border-start-0 border-info text-bg-info p-3 container d-flex flex-column justify-content-evenly">
            <h2 className='text-center'>Is Present ?</h2>
            <h6 className='text-center text-muted'> i.e. Searching Student</h6>
            <form onSubmit={checkStudent} className='myForm needs-validation' noValidate>
                <div className="form-floating">

                    <input type="number" className="form-control" id="rollNo" placeholder="Ex: 23" />
                    <label htmlFor="floatingRollNo">Roll Number</label>

                </div>
                <div className="div">
                    <button type="submit" className="btn btn-info my-3">Check</button>
                </div>
            </form>
        </div>

    )
}
