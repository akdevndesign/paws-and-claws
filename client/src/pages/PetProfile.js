import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { QUERY_PET } from "../utils/queries";
import { useQuery } from "@apollo/client";

export default function PetProfile() {
  const { petId: id } = useParams();
  const { data, loading, error } = useQuery(QUERY_PET, { variables: { id } });
  const {
    activity_level,
    cuddliness_level,
    friendliness_level,
    age,
    name,
    image_url,
    bio,
  } = data?.getPetById || {};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section className="pet-profile">
      <div className="container">
        <div className="row profile">
          <div className="col-md-6">
            <div className="profile-img">
              <Carousel
                id="carouselExampleControls"
                interval={null}
                controls={false}
              >
                <Carousel.Item>
                  <div className="circle-img">
                    <img src={image_url} alt="" />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="mt-5">
              <h3>{name}</h3>
              <p>Age: {age}</p>
              <p>Incarceration Date</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bio">
              <h3>Biography</h3>
              <p>{bio}</p>
            </div>
            <div className="levels">
              <div className="activity">
                <h4>Activity Level</h4>
                <div className="progress mt-4 mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${activity_level * 10}%` }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
              <div className="cuddling">
                <h4>Cuddling Level</h4>
                <div className="progress mt-4 mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${cuddliness_level * 10}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
              <div className="friendly">
                <h4>Friendliness</h4>
                <div className="progress mt-4 mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${friendliness_level * 10}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
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
        <div className="row justify-content-center">
          <div className="col-md-4 text-center pt-5">
            <button className="btn btn-lg" id="adoptNow">
              Adopt Me Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
