import { Carousel } from 'react-bootstrap';

export default function PetProfile() {
    return (
        <section className="pet-profile">
            <div className="container">
                <div className="row profile">
                    <div className="col-md-6">
                        <div className="profile-img">
                            <div className="circle-img">
                                <img src="img/pet1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3>Name Here</h3>
                            <p>Age: 4yrs</p>
                            <p>Incarceration Date</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bio">
                            <h3>Biography</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident maiores vel molestias soluta optio quasi
                                nobis ab odit fugit. Consequatur delectus officiis consectetur, vel quas non earum ea quos quis.
                            </p>
                        </div>
                        <div className="levels">
                            <div className="activity">
                                <h4>Activity Level</h4>
                                <div className="progress mt-4 mb-4">
                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </div>
                            <div className="cuddling">
                                <h4>Cuddling Level</h4>
                                <div className="progress mt-4 mb-4">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </div>
                            <div className="friendly">
                                <h4>Friendliness</h4>
                                <div className="progress mt-4 mb-4">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                            </div>
                        </div>
                        <div className="badges">
                            <h3>Badges</h3>
                            <div className="badge">
                                <img src="img/badge1.jpg" alt="" />
                            </div>
                            <div className="badge">
                                <img src="img/badge2.jpg" alt="" />
                            </div>
                            <div className="badge">
                                <img src="img/badge3.jpg" alt="" />
                            </div>
                            <div className="badge">
                                <img src="img/badge4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    <div className="col-md-4 text-center pt-5">
                        <button className="btn btn-lg" id="adoptNow">Adopt Me Now!</button>
                    </div>
                </div>
            </div>
        </section>
    )
};