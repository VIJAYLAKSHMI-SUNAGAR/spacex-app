import React, { useState } from 'react';
import './css/Filters.css';
import '../App.css';

const Filters = ({ retrieveFilteredData, filterValues }) => {

  const [yearTargetId, setYearTargetId] = useState("");
  const [launchFilterId, setLaunchFilterId] = useState("");
  const [landFilterId, setLandFilterId] = useState("");

  const toggleValue = (name, value, e) => {
    switch(name) {
        case "launch_year": if (filterValues.launch_year === value) {
                                return '';
                              };
        case "launch_success": if (filterValues.launch_success === value) {
                                  return '';
                                };
        case "land_success": if (filterValues.land_success === value) {
                                return '';
                              };
        default: return value;
      }
  }

  const onClickHandle = (e) => {
    var name = e.target.name;
    var id = e.target.id;
    let value =  e.target.value;

    if (name === "launch_year") {
      if (id !== yearTargetId) {
        e.target.classList.toggle("land-button-active");
      }
      setYearTargetId(id);
      if (yearTargetId) {
        document.getElementById(''+ yearTargetId + '').className = 'land-button';
      }
    }
    if (name === "launch_success") {
        if (id !== launchFilterId) {
          e.target.classList.toggle("land-button-active");
        }
        setLaunchFilterId(id);
        if (launchFilterId) {
          document.getElementById(''+ launchFilterId + '').className = 'land-button';
        }
    }
    if (name === "land_success") {
        if (id !== landFilterId) {
          e.target.classList.toggle("land-button-active");
        }
        setLandFilterId(id);
        if (landFilterId) {
          document.getElementById(''+ landFilterId + '').className = 'land-button';
        }
    }
    value = toggleValue(name, value);
    retrieveFilteredData(name, value);
  }

  function renderButtons() {
    const views = [];
    let year = 2006;

    for ( var i =0; i<15; i++){
       views.push(
          <button
             key={i}
             color="#841584"
             accessibilityLabel="Learn more about this purple button"
             className="year-button"
             name="launch_year"
             value={year}
             onClick={onClickHandle}
             id={`launch-year-${year}`}
          >
          {year}
          </button>
        );
        year++;
      }
      return views;
  }

  return  (
    <div className="card-filter column">
      <div className="filters-label">
        <label>Filters</label>
      </div>
      <div className="filters">
        <div className="filter-group">
          <label>Launch Year</label>
          <hr className="line-separator"/>
          {
            renderButtons()
          }
        </div>
        <div className="filter-group">
          <label>Successfull Launch</label>
          <hr className="line-separator"/>
          <button id="launchTrue" className="launch-button" name="launch_success" onClick={onClickHandle} value="true">True</button>
          <button id="launchFalse" className="launch-button" name="launch_success" onClick={onClickHandle} value="false">False</button>
        </div>
        <div className="filter-group">
          <label>Successfull Landing</label>
          <hr className="line-separator"/>
          <button id="landTrue" className="land-button" name="land_success" onClick={onClickHandle} value="true">True</button>
          <button id="landFalse" className="land-button" name="land_success" onClick={onClickHandle} value="false">False</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
