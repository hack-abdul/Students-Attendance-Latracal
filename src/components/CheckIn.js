import React from 'react'
const { allLetter, isUnique, inRange, toCamelCase } = require('./Validation')

export default function CheckIn(props) {

    // Adding the student via useState hook
    const addStudent = async (event) => {

        event.preventDefault()
        const name = event.target.sName.value
        const rollNo = event.target.rollNo.value
        // Before adding students validations are run
        if (!name || !rollNo) {
            alert('Credentials cannot be empty')
            return
        }
        if (!allLetter(name)) {
            return
        }
        if (!inRange(rollNo)) {
            return
        }
        if (!isUnique(rollNo, props.studentsArray)) {
            return
        }

        // making and adding the Student as an Object
        let d = new Date()
        d.getHours()
        d.getMinutes()
        let camelCasedName = await toCamelCase(name)
        const data = {
            studentName: camelCasedName,
            rollNo,
            checkIn: d.getHours() + ":" + d.getMinutes() + " hrs",
            checkOut: "PRESENT",
        }
        event.target.sName.value = ""
        event.target.rollNo.value = ""
        props.addStudent(data)


    }

    return (
        <div className="border border-info text-bg-info p-3 container d-flex flex-column justify-content-evenly">
            <h2 className='text-center'>Student Check-In</h2>
            <h6 className='text-center text-muted'>We are validated Forms ;) </h6>
            <form onSubmit={addStudent} className='myForm needs-validation' noValidate>
                <div className="form-floating mb-3">

                    <input name="sName" type="text" className="form-control" id="floatingName" placeholder="John Doe" required />
                    <label htmlFor="floatingName">First Name Only</label>


                </div>
                <div className="form-floating">

                    <input name="rollNo" type="number" className="form-control" id="floatingRollNo" placeholder="Ex: 23" required />
                    <label htmlFor="floatingRollNo">Roll Number</label>

                </div>
                <div className="div">
                    <button type="submit" className="btn btn-info my-3">Enter</button>
                </div>
            </form>
        </div>

    )


}




