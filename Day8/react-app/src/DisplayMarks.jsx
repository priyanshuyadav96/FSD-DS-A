import React from 'react'
import Marks from './Marks'

const DisplayMarks = () => {
    const students=[{m1:23,m2:53,m3:51},{m1:27,m2:512,m3:11},{m1:27,m2:86,m3:45},{m1:23,m2:53,m3:51},{m1:23,m2:53,m3:51}];
  return (
    <>
    {students.map((student,index)=>(
        <Marks key={index} m1={student.m1} m2={student.m2} m3={student.m3} />
    ))}
    </>
  )
}

export default DisplayMarks