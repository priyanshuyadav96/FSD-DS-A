import React from 'react'

const Dashboard = ({regDash}) => {
  return (
    <div>
      <div>
      <div className="container">
        <div className="jumbotron">
          <h1>User DashBoard</h1>
          <h2>Logout</h2>
          <p>Welcome {regDash.name}</p>
        </div>
        <p>You Login Email : {regDash.email}</p>
        <p>Click the button to Fetch Weather</p>
      </div>
    </div>

    </div>
  )
}

export default Dashboard