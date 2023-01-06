import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import CheckIn from './components/CheckIn';
import IsPresent from './components/IsPresent';
import CheckOut from './components/CheckOut';


function App() {

  // feeding exemplary data
  const [students, setStudents] = useState([{ studentName: "Abdul", rollNo: '0', checkIn: '7:45 hrs', checkOut: '11:15 hrs' }]);

  // to add student entry to register - passed to CheckIn.js
  const onCheckIn = (data) => {
    setStudents(students.concat(data))
    alert('Student will be Checked In  :) !')
  }

  // to add check-out status of given Student passed to CheckOut.js
  const onCheckOut = async (rollNo, hours, minutes) => {
    let updateCheckOutStudents = students.map((element) => {
      if (element.rollNo === rollNo) {
        element.checkOut = hours + ":" + minutes + " hrs"
        alert("Student will be Checked Out :) !")
      }
      return element
    })
    setStudents(updateCheckOutStudents)
  }

  return (
    <>
      <h1 className='text-center my-3'>Student Attendance System</h1>
      <h6 className='text-center'>Please spare the annoying alerts, it can be customized easily :) </h6>

      {/* creating three forms */}
      <div className="div container-lg my-5">
        <div className="row justify-content-around">
          <div className="col-4">
            <IsPresent studentsArray={students} />
          </div>
          <div className="col-4">
            <CheckIn addStudent={onCheckIn} studentsArray={students} />
          </div>

          <div className="col-4">
            <CheckOut removeStudent={onCheckOut} studentsArray={students} />
          </div>
        </div>
      </div>
      {/* rendering Online Register */}
      <Dashboard
        students={students}
      />
    </>
  );
}

export default App;
