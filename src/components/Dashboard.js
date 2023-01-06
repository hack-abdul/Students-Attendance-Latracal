import React from 'react'
import Student from './Student';
const { countPresentStudents } = require('./Validation')

export default function Dashboard(props) {

    // Sorting the Array to render Students in an orderly Fashion
    props.students.sort((a, b) => {
        return a.rollNo - b.rollNo;
    });

    return (

        <>
            <div className="container border border-dark my-5 pb-5">
                <h1 className='text-center my-3'>Online Register</h1>
                <div className="container">

                    {/* Returning iteratively all the objects in Students Array */}
                    {props.students.map((element) => {
                        let { studentName, rollNo, checkIn, checkOut } = element;
                        return (
                            <div className="container-fluid" key={rollNo}>
                                <Student studentName={studentName} rollNo={rollNo} checkIn={checkIn} checkOut={checkOut} />
                            </div>
                        )

                    })}


                </div>
                <div className="container d-flex justify-content-around">


                    <span className="border-2 bg-dark text-light border rounded-pill border-info my-3 py-2 px-3">Total students currently present :
                        <span className='fs-5 fw-bold'>{` ` + countPresentStudents(props.students)}</span>
                    </span>

                    <span className="border-2 bg-dark text-light border  rounded-pill border-info my-3 py-2 px-3">Total students attended school today :
                        <span className=' fs-5 fw-bold'>{` ${props.students.length}`}</span>
                    </span>


                </div>
            </div>

        </>
    )
}
