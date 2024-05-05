import { Component } from "react";
import "./index.css";

class College extends Component {
  render() {
    return (
      <div>
        <div className="header-portion">
          <div>
            <img className="college-logo" src="icon.png" alt="college-logo" />
          </div>
          <div className="counselling">
            <h5>Counselling Code</h5>
            <p>1234</p>
          </div>
          <div>
            <h1 className="college-name">G.S. College of Engineering and Technology</h1>
            <p>
              (An Autonomous Institution) Approved by NAAC, NBA and ISO
              certified Institution.
            </p>
          </div>
          <div className="certified-container">
            <div className="certified-img-container">
              <img src="iso.png" alt="" className="certified-img" />
            </div>
            <div className="certified-img-container">
              <img src="naac.png" alt="" className="certified-img" />
            </div>
            <div className="certified-img-container">
              <img src="nba.png" alt="" className="certified-img" />
            </div>
            <div className="certified-img-container">
              <img src="nirf.png" alt="" className="certified-img" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <nav className="nav-bar">
              <li className="nav-list">Home</li>
              <li className="nav-list">About US</li>
              <li className="nav-list">Admissions</li>
              <li className="nav-list">Academics</li>
              <li className="nav-list">Departments</li>
              <li className="nav-list">Student Affairs</li>
              <li className="nav-list">Placement</li>
              <li className="nav-list">Research</li>
              <li className="nav-list">Accrediation & Ranking</li>
              <li className="nav-list">COE & Examinations</li>
              <li className="nav-list">Library</li>
            </nav>
          </div>
        </div>
        <div className="outer-middle-college">
          <div className="college-container">
            <div className="college-description">
              <h4 className="welcome">Welcome to ...</h4>
              <h3>G.S. College of Engineering and Technology</h3>
              <p>
                G.S. Educational Trust was founded in the year 2015 by Mr.
                Vishnu Ganesan, the founder and Chairman of the G.S. College of
                Engineering and Technology, with an interest in promoting,
                managing and administrating educational institutions with high
                academic standards, discipline and to take up and help other
                allied activities in the field of education. Under the Trust,
                G.S. College of Engineering and Technology, Chennai was
                established in the year 2015.
              </p>
              <button>Read More</button>
            </div>
            <div>
              <div>
                <img
                  src="college.png"
                  alt="college-photo"
                  className="college-photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="outer-middle-chairman">
          <div className="outer-chairman-card">
            <div className="chairman-card">
              <div>
                <img src="vishnu.png" alt="vishnu-img" className="vishnu-img" />
              </div>
              <div className="chairman-description">
                <h1>Words from Chairman's Desk</h1>
                <p>
                  Our Institution, a temple of learning and a hallmark of
                  discipline, treads towards the zenith of glory by preferring
                  the education of global standards in the best quality and
                  variety, and substantiates to be a benchmark among all the
                  colleges in India.
                </p>
                <div className="by-chairman">
                  <p>- Dr. Vishnu Ganesan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="innovative-education-container">
          <div className="innovative-career-container">
            <div className="career-container">
              <div className="sub-career-container">
                <h3>INNOVATIVE EDUCATION</h3>
                <p>
                  G.S.C.E.T. Makes the Students,
                  <br></br>
                  Career - Ready
                </p>
              </div>              
              <hr/>              
              <p>
                G.S. College of Engineering and Technology has been instrumental
                in providing exceptional education to all its students. The
                institution fosters a holistic development approach, offering
                valuable opportunities that prepare individuals to excel in
                their careers and personal growth.
              </p>
            </div>
            <div className="innovative-container">
              <div className="sub-innovative-container">
                <div className="sub-sub-innovative-container">
                  <h6>1500+</h6>
                  <p>Proud Alumnus</p>
                </div>
                <div className="sub-sub-innovative-container">
                  <h6>4500+</h6>
                  <p>Current Students</p>
                </div>
              </div>
              <div className="sub-innovative-container">
                <div className="sub-sub-innovative-container">
                  <h6>500+</h6>
                  <p>Placed students</p>
                </div>
                <div className="sub-sub-innovative-container">
                  <h6>500+</h6>
                  <p>Faculties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="programmes-offer">
          <div className="programmes-container">
            <h3>Programmes Offered</h3>
            <p>
              G.S. College of Engineering and Technology offers 8 Undergraduate
              (B.E. and B.Tech.), 9 Postgraduate (M.E., M.Tech., MBA and MCA)
              and 7 research centers (Ph.D) degree programmes.
            </p>
          </div>
        </div>
        <div className="ug-programmes">
          <div className="ug-programme-heading">
            <h3>UG Programmes in our college</h3>
          </div>
          <div className="ug-program-container">
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="agri.png"
                  alt="agriculture-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Agricultural Engineering</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="electronic.png"
                  alt="electrical-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Electrical and Electronical</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="computer.png"
                  alt="computer-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Computer Science Engineering</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="civil.png"
                  alt="civil-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Civil Engineering</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="mechanical.png"
                  alt="mechacnical-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="ug-programmes">
          <div className="ug-programme-heading">
            <h3>PG Programmes in our college</h3>
          </div>
          <div className="ug-program-container">
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="btech.png"
                  alt="btech-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Bio Technology</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img src="ai.png" alt="ai-logo" className="ug-program-image" />
              </div>
              <div>
                <h4>Artifical Intelligence</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="ece.png"
                  alt="ece-logo"
                  className="ug-program-image"
                />
              </div>
              <div className="">
                <h4>Electronics and Communication</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img src="it.png" alt="it-logo" className="ug-program-image" />
              </div>
              <div>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div className="sub-ug-program-container">
              <div className="ug-program-image-container">
                <img
                  src="chemical.png"
                  alt="chemical-logo"
                  className="ug-program-image"
                />
              </div>
              <div>
                <h4>Chemical Engineering</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="alumni-testimony">
          <div>
            <div className="testimonal-heading">
              <h3>Tesimonal</h3>
              <p>Our Alumni are our Testimony</p>
            </div>
            <div className="testimonal-container">
              <div>
                <div className="testimonal-coard-container">
                  <div>
                    <div className="testimonial-card">
                      <div className="alumni-img-container">
                        <img
                          src="testimonal1.png"
                          alt="user-image"
                          className="alumni-img"
                        />
                      </div>
                      <div className="alumni-detail">
                        <h5 className="alumni-name">Jackson Michael</h5>
                        <p className="alumni-role">Product Manager</p>
                      </div>
                    </div>
                    <div className="testimonial-para">
                      <p>
                          The College consistently provided me with immense
                        opportunities and resoucrces and thereby contributing
                        significantly to my personalacemepr team tional growth.
                        the The didicated placement team tirelessly worked to
                        bring numerous companies on board, leading to frequent
                        placement drives. This helped in securing a job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonal-coard-container">
                  <div>
                    <div className="testimonial-card">
                      <div className="alumni-img-container">
                        <img
                          src="testimonal2.png"
                          alt="user-image"
                          className="alumni-img"
                        />
                      </div>
                      <div className="alumni-detail">
                        <h5 className="alumni-name">Vivekanandhan</h5>
                        <p className="alumni-role">Software Engineer </p>
                      </div>
                    </div>
                    <div className="testimonial-para">
                      <p>
                          The College consistently provided me with immense
                        opportunities and resoucrces and thereby contributing
                        significantly to my personalacemepr team tional growth.
                        the The didicated placement team tirelessly worked to
                        bring numerous companies on board, leading to frequent
                        placement drives. This helped in securing a job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonal-coard-container">
                  <div>
                    <div className="testimonial-card">
                      <div className="alumni-img-container">
                        <img
                          src="testimonal3.png"
                          alt="user-image"
                          className="alumni-img"
                        />
                      </div>
                      <div className="alumni-detail">
                        <h5 className="alumni-name">Abdul Kalam</h5>
                        <p className="alumni-role">C.O.E & Founder</p>
                      </div>
                    </div>
                    <div className="testimonial-para">
                      <p>
                          The College consistently provided me with immense
                        opportunities and resoucrces and thereby contributing
                        significantly to my personalacemepr team tional growth.
                        the The didicated placement team tirelessly worked to
                        bring numerous companies on board, leading to frequent
                        placement drives. This helped in securing a job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="testimonal-coard-container">
                  <div>
                    <div className="testimonial-card">
                      <div className="alumni-img-container">
                        <img
                          src="testimonal4.png"
                          alt="user-image"
                          className="alumni-img"
                        />
                      </div>
                      <div className="alumni-detail">
                        <h5 className="alumni-name">Mellinda </h5>
                        <p className="alumni-role">H.R. Manager</p>
                      </div>
                    </div>
                    <div className="testimonial-para">
                      <p>
                          The College consistently provided me with immense
                        opportunities and resoucrces and thereby contributing
                        significantly to my personalacemepr team tional growth.
                        the The didicated placement team tirelessly worked to
                        bring numerous companies on board, leading to frequent
                        placement drives. This helped in securing a job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="placements">
          <div className="placement-heading-container">
            <div className="placement-heading">
              <h3>Placements</h3>
              <p>
                One of the institutions to have MOE signed with International
                level top MNC's
              </p>
            </div>
            <div className="placement-container">
              <div className="placement-detail-container">
                <div className="placement-detail-sub-container">
                  <h4>100%</h4>
                  <p>Placement Assistance</p>
                </div>
                <hr ></hr>
                <div className="placement-detail-sub-container">
                  <h4>750 +</h4>
                  <p>Placement drives conducted across Global.</p>
                </div>
              </div>
              <div className="placement-mnc-container">
                <div className="placement-heading">
                  <h5>Top Companies of India.</h5>
                </div>
                <div className="placement-mnc-img-container">
                  <div>
                    <img
                      src="tcs.png"
                      alt="mnc-logo"
                      className="placement-mnc-img"
                    />
                  </div>
                  <div>
                    <img
                      src="zoho.png"
                      alt="mnc-logo"
                      className="placement-mnc-img"
                    />
                  </div>
                  <div>
                    <img
                      src="accenture.png"
                      alt="mnc-logo"
                      className="placement-mnc-img"
                    />
                  </div>
                  <div>
                    <img
                      src="cognizant.png"
                      alt="mnc-logo"
                      className="placement-mnc-img"
                    />
                  </div>
                  <div>
                    <img
                      src="tata.png"
                      alt="mnc-logo"
                      className="placement-mnc-img"
                    />
                  </div>
                  <div>
                    <img
                      src="infosys.png"
                      alt="mnc-logo"
                      className="placement-mnc-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-of-excellence">
          <div className="coe-container">
            <div className="coe-description">
              <div className="coe-heading">
                <h2>Centre of Excellence @ G.S.C.E.T.</h2>
              </div>
              <p>
                G.S. College of Engineering and Technology establishes Center of
                Excellence (CoE) to enhance the skills and knowledge of students
                and faculty in various emerging technologies. The CoEs are
                equipped with state-of-the-art infrastructure and facilities
                relevant to the specific field of study, includes advanced
                laboratories, specialized equipments, software, and other
                resources necessary for hands-on learning and practical
                applications. Students have the opportunity to gain practical
                experience and hands-on training, preparing them for real-world
                challenges in their core industry. It also engages students and
                faculty in industry-relevant projects and provides practical
                exposure and helps to bridge the gap between academic knowledge
                and industry requirements. It serves as hubs for continuous
                learning and knowledge upgradation. Regular workshops, seminars,
                and training sessions conducted within the CoE, help the
                students and faculty to have the insight on latest developments
                in their field and plays a role in promoting research and
                innovation within a specific domain.
              </p>
            </div>
            <div className="coe-img-container">
              <img src="coe.png" alt="image-coe" className="coe-image" />
            </div>
          </div>
        </div>
        <div className="member-of-excellence">
          <div>
            <div className="moe-heading-container">
              <h3 className="moe-heading">Memeber of Excellence</h3>
            </div>
            <div className="moe-container">
              <div className="moe-image-sub-container">
                <div className="moe-image-container">
                  <img src="jio.png" alt="jio-logo" className="moe-image" />
                </div>
              </div>
              <div>
                <div className="moe-image-container">
                  <img src="tesla.png" alt="tesla-logo" className="moe-image" />
                </div>
              </div>
              <div>
                <div className="moe-image-container">
                  <img src="tcs.png" alt="tcs-logo" className="moe-image" />
                </div>
              </div>
              <div>
                <div className="moe-image-container">
                  <img src="hp.png" alt="hp-logo" className="moe-image" />
                </div>
              </div>
              <div>
                <div className="moe-image-container">
                  <img src="bosch.png" alt="bosch-logo" className="moe-image" />
                </div>
              </div>
              <div>
                <div className="moe-image-container">
                  <img
                    src="cisco.png"
                    alt="meesho-logo"
                    className="moe-image"
                  />
                </div>
              </div>
              <div>
                <div className="moe-image-container">
                  <img src="justdial.png" alt="adobe-logo" className="moe-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer-portion">
            <div className="footer-portion-sections">
              <div className="header-logo-bg">
                <img className="college-logo" alt="logo" src="icon.png" />
                <h1>G.S. College of Engineering and Technology</h1>
                <p>An Autonomous Institution</p>
                <p>
                  Approved by AICTE, New Delhi, Affilated to Anna University,
                  Chennai
                </p>
                <p>An ISO 9001:2005 Certified Institution</p>
                <div>
                  <div>
                    <h4>Follow on social medias</h4>
                  </div>
                  <div className="follow-icon-container">
                    <a href="https://www.facebook.com/">
                      <img
                        className="social-icon"
                        src="square-facebook.svg"
                        alt="facebook-logo"
                      />
                    </a>
                    <a href="https://www.instagram.com/">
                      <img
                        className="social-icon"
                        src="square-instagram.svg"
                        alt="instagram-logo"
                      />
                    </a>
                    <a href="https://www.twitter.com/">
                      <img
                        className="social-icon"
                        src="square-x-twitter.svg"
                        alt="twitter-logo"
                      />
                    </a>
                    <a href="https://www.youtube.com/">
                      <img
                        className="social-icon"
                        src="square-youtube.svg"
                        alt="facebook-logo"
                      />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <img
                        className="social-icon"
                        src="linkedin.svg"
                        alt="facebook-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-list-container">
                <div className="sub-footer-list-container">
                  <ul className="list-footer">
                    <li>
                      <h1>Quick Links</h1>
                    </li>
                    <li>Achievements</li>
                    <li>Privacy Policy</li>
                    <li>Downloads</li>
                    <li>Web Portal</li>
                    <li>Students Login</li>
                    <li>Staff Login</li>
                    <li>Feedback Form</li>
                    <li>Get Resources</li>
                  </ul>
                </div>
                <div className="sub-footer-list-container">
                  <ul className="list-footer">
                    <li>
                      <h1>Campus</h1>
                    </li>
                    <li>About Trust</li>
                    <li>About Management</li>
                    <li>Alumni Registration</li>
                    <li>Placement Cell</li>
                    <li>Transport Department</li>
                    <li>Sports</li>
                    <li>Location Map</li>
                  </ul>
                </div>
                <div className="sub-footer-list-container">
                  <ul className="list-footer">
                    <li>
                      <h1>Accrediations</h1>
                    </li>
                    <li>AICTE</li>
                    <li>Anna University</li>
                    <li>NBA</li>
                    <li>NAAC</li>
                    <li>UGC Autonomous</li>
                    <li>NIRF</li>
                    <li>ISO Certifications</li>
                    <li>ISTE Memberships</li>
                    <li>Governmnet Authorized</li>
                    <li>National Permitted</li>
                  </ul>
                </div>
                <div className="sub-footer-list-container">
                  <ul className="list-footer">
                    <li>
                      <h1>Academics</h1>
                    </li>
                    <li>Admissions</li>
                    <li>Academic Calender</li>
                    <li>Regulation</li>
                    <li>Curriculum</li>
                    <li>Faculty Team</li>
                    <li>Library</li>
                    <li>Resources</li>
                    <li>RTI Act</li>
                    <li>Students Performance</li>
                    <li>Exam Results</li>
                  </ul>
                </div>
                <div className="sub-footer-list-container">
                  <ul>
                    <li>
                      <h1>Portal Links</h1>
                    </li>
                    <li>CAMS</li>
                    <li>Certificate Verification</li>
                    <li>Smart Hostel</li>
                    <li>Teaching Center</li>
                    <li>Library OPAC</li>
                    <li>Blog</li>
                    <li>Online Payment</li>
                    <li>Enquiries</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copy-right-container">
              <hr className="horizontal-line"></hr>
              <p>
                2024 © G.S. College of Engineering and Technology | All Rights
                Reserved | Developed By Vishnu Ganesan.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default College;
