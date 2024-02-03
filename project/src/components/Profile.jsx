import React from 'react'
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
    <section >
    <div className="profile-container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="profile-card mb-4">
            <div className="profile-card-body text-center">
              <img src="public/my1.jpg"
                 className="rounded-circle"
                style={{ width: 180, height:180 }}
              />
              <h5 className="my-3">RACHNA VISHWAKARMA</h5>
              <h5 className="heading text-muted mb-1">Home Made Recipes</h5>
              <h5 className="text-muted mb-4">#Navabi Tadka</h5>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary">
                  Follow
                </button>
                <button type="button" className="btn btn-outline-primary ms-1">
                  Message
                </button>
              </div>
            </div>
          </div>
          <div className="profile-card mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between p-3">
                  <i className="fas fa-globe fa-lg text-warning" />
                  <p className="mb-0">rachnavish</p>
                </li>
                <li className="list-group-item d-flex justify-content-between  p-3">
                  <i
                    className="fab fa-github fa-lg"
                    style={{ color: "#333333" }}
                  />
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between p-3">
                  <i
                    className="fab fa-twitter fa-lg"
                    style={{ color: "#55acee" }}
                  />
                  <p className="mb-0">@Navabi_tadka</p>
                </li>
                <li className="list-group-item d-flex justify-content-between  p-3">
                  <i
                    className="fab fa-instagram fa-lg"
                    style={{ color: "#ac2bac" }}
                  />
                  <p className="mb-0">vish_rachna</p>
                </li>
                <li className="list-group-item d-flex justify-content-between  p-3">
                  <i
                    className="fab fa-facebook-f fa-lg"
                    style={{ color: "#3b5998" }}
                  />
                  <p className="mb-0">navabi_tadka</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="profile1-card mb-4">
            <div className="profile-card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="profile-text text-muted mt-4">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="profile-text text-muted mt-4">RACHNA VISHWAKARMA</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="profile-text text-muted">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="profile-text text-muted">rachnavish@gmail.com</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="profile-text text-muted">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="profile-text text-muted">9369986157</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="profile-text text-muted">Mobile</p>
                </div>
                <div className="col-sm-9">
                  <p className="profile-text text-muted">8765566098</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="profile-text text-muted">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="profile-text text-muted ">LUCKNOW UTTAR PRADESH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="profile-card1">
                <div className="profile-card-body1">
                  <h4 className="mb-4">
                    <span className="heading text-primary font-italic me-1">
                      Famous recipe
                    </span>
                    
                  </h4>
                  <h3 className="heading  mb-1" style={{ fontSize: "1rem" }}>
                    Dinner Recipes
                  </h3>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Breakfast Recipes
                  </h3>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Lunch Recipes
                  </h3>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow={89}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Snacks Recipes
                  </h3>
                  <div className="heading heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Easy-Made Recipes
                  </h3>
                  <div className="heading progress rounded mb-2" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow={66}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-card1 mb-4 mb-md-0">
                <div className="profile-card-body1">
                  <h4 className="mb-4">
                    <span className="heading text-primary font-italic me-1">
                      Trendy dishes Recipes
                    </span></h4>
                  <h5 className="heading mt-4 mb-1" style={{ fontSize: "1rem," }}>
                   Gujrat dishes recipe
                  </h5>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Bihar dishes recipe
                  </h3>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Punjab dishes recipe
                  </h3>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow={89}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className=" heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    Maharashtra dishes recipe
                  </h3>
                  <div className="heading progress rounded" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h3 className="heading mt-4 mb-1" style={{ fontSize: "1rem" }}>
                    South dishes recipe
                  </h3>
                  <div className="heading progress rounded mb-2" style={{ height: 5 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow={66}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </div>
  )
}

export default Profile
