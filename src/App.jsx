
import React, { useState } from 'react'
import StudentForm from './StudentForm'
import StudentTable from './StudentTable'

export default function App() {

  // State to store all student data
  const [studentData, setStudentData] = useState([])

  // Function to handle student form data
  function updateStudentForm(data) {

    // Check if any field is empty
    if (
      !data.name.trim() ||
      !data.email.trim() ||
      !data.enrollment.trim() ||
      !data.college.trim()
    ) {
      alert("Please fill all fields!")
      return
    }

    // Check if the email already exists
    const isDuplicate = studentData.find((user) => {
      return user.email === data.email;
    });

    // Stop adding data if the email is duplicate
    if (isDuplicate) {
      alert("This email already exists!")
      return
    }

    // Add new student data to the state
    setStudentData([...studentData, data])
  }

  // Function to remove a student from the table
  function removeHandler(index) {

    // Filter out the student at the selected index
    const newData = studentData.filter((d, i) => {
      return i !== index
    })

    // Update the student list after removal
    setStudentData(newData)
  }

  return (
    <div>

      {/* Student form component */}
      <StudentForm updateStudentForm={updateStudentForm} />

      {/* Student table component */}
      <StudentTable
        studentData={studentData}
        removeHandler={removeHandler}
      />

    </div>
  )
}
