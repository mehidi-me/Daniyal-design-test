import React from 'react'

function Breadcrumb() {
  return (
    <main>
        <div className="container">
          <div className="breadcrumb">
            <h2>About us</h2>
            <div className="breadcrumb-nav">
              <img src="./icons/home.svg" alt="" />
              <p>Home</p>
              <img src="./icons/chevron-right.svg" alt="" />
              <p>About us</p>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Breadcrumb