import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className="container loader">
        <h2>Loading...  Please wait..</h2>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
  )
}

export default Loader