import React from 'react';
import './css/LaunchCard.css';
import '../App.css';

const LaunchCard = ({ data }) => {
  const title = `${data.mission_name} #${data.flight_number}`;
  const { mission_id } = data;
  const landSuccess = data.rocket.first_stage.cores[0].land_success;

  return (
    <div className="card column" >
      <div>
        <div className="img-display">
          <img src={data?.links?.mission_patch} alt="Avatar" />
        </div>
        <div className="container">
            <div className="card-title">
              {title}{"\n"}
            </div>
            <div className="mission-details">
              <label className="mission-ids-label">Mission Ids: </label>
              <label className="mission-ids-value">
                { mission_id && mission_id.length > 0 &&
                <ul className="list-items">
                  {
                    mission_id?.map((missionId, index) => (
                      <li key={index}>
                        {missionId}
                      </li>
                    ))
                  }
                </ul>
                }
              </label>
            </div>
            <div className="launch-details">
              <label className="launch-details-label">Launch Year: </label>
              <label className="launch-value">{data.launch_year}</label>
            </div>
            <div className="launch-details">
              <label className="launch-details-label">Successfull Launch: </label>
              <label className="launch-value">{data.launch_success === null ? "" : ( data.launch_success === true ? "true" : "false" )}</label>
            </div>
            <div className="launch-details">
              <label className="launch-details-label">Successfull Landing: </label>
              <label className="launch-value">{landSuccess === null ? "" : ( landSuccess === true ? "true" : "false" )}</label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
