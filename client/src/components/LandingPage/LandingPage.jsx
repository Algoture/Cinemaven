import React from 'react'

import "./LandingPage.css"

const LandingPage = () => {
  return (

    <>
      <div className="landing">
        <div className="bg-img">
          <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="main">
          <div className="trending-movie">
            <div className='gradient'></div>

            <div className="content">
              <div className="options">
                <h2>All</h2>
                <h2>TV Shows</h2>
                <h2>More</h2>
              </div>

              <div className="movie">
                <h1>Movie name</h1>
                <div className="year"><span>2024</span></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam saepe repellat ipsum officiis, pariatur temporibus obcaecati tempore quia voluptate. Eligendi nulla dolores beatae voluptatem itaque tenetur in neque voluptatibus ipsa.</p>
              </div>

              <div className="watch">
                <button className="watch-now">Watch</button>

                <div className="trailer-button">
                  <button className="trailer">Trailer</button>
                  <button className="add-list">Add List</button>
                </div>
              </div>
            </div>
          </div>


          <div className="login">
            <button className='login-btn'>Log In</button>
          </div>

        </div>




      </div>
    </>

  )
}

export default LandingPage
