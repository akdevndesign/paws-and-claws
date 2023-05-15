import { useParams } from "react-router-dom";
import { QUERY_PET } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export default function PetProfile() {
  const { petId: id } = useParams();
  const { data, loading, error } = useQuery(QUERY_PET, { variables: { id }, fetchPolicy: "network-only" });
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
    <div className="container pet-profile">
      <div className="col-sm-12 col-md-10 col-lg-10 mx-auto">
        <div className="row profile">
          <div className="col-lg-6 col-md-8">
            <div className="profile-img">
              <div className="circle-img">
                <img src={image_url} alt="" className="circle-img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="bio">
              <h3>About {name}!</h3>
              <p>{age} years old</p>
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
            <Link to={`/application/${id}`}>
              <button className="btn btn-lg" id="adoptNow">
                Adopt Me Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
