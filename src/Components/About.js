
import './Home.css';
import profileimage from "../Assests/img/hana_propic.jpeg"


function About() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>I am a 4th-year B.Tech student in the Division of Computer Science at School of Engineering CUSAT. I love coding because I enjoy the joy of learning, which springs from the nonrepeating nature of the task and relish the sheer delight of exploring new things.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src={profileimage} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>B.tech Student &amp; Web Developer.</h3>
                            <p className="fst-italic">
                
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 June 2000</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://hana-noorudheen.github.io/</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-8086876572</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kerala,India</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.tech</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hananoorudheen721@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>

                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;