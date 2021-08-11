function Studentinformation(props) {
    const {studentName, grade, subject} = props
    return <div>
        <p>Student's name: {studentName}</p>
        <p>CurrentGrade: {grade}</p>
        <p>Subject: {subject}</p>
    </div>
}

export default Studentinformation