import React from 'react';
import './App.css';
import LaunchCard from "./components/LaunchCard";
import Filters from "./components/Filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      spaceData: [],
      filters: {
        launch_year: '',
        land_success: '',
        launch_success: '',
      }
    };

    this.retrieveFilteredData = this.retrieveFilteredData.bind(this);
  }

  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then(res => res.json())
      .then(data => {
        this.setState({
          spaceData: data,
          isLoaded: true
        });
      })
      .catch(console.log);
  }

  retrieveFilteredData = (name, value) => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.filters[name] = value;
    this.setState(statusCopy);
    const filterValues = this.state.filters;
    let url = "https://api.spaceXdata.com/v3/launches?limit=100";

    if (filterValues) {
      if (filterValues.launch_year !== '') {
        url = `${url}&launch_year=${filterValues.launch_year}`;
      }
      if (filterValues.launch_success !== '') {
        url = `${url}&launch_success=${filterValues.launch_success}`;
      }
      if (filterValues.land_success !== '') {
        url = `${url}&land_success=${filterValues.land_success}`;
      }
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          spaceData: data,
          isLoaded: true
        });
      })
      .catch(console.log);
  }

  render() {
    if (!this.state.isLoaded) {
        return <h1>Loading...</h1>;
      } else {
      return (
        <div className="app-container">
        <h1>SpaceX Launch Programs</h1>
          <div className="App row">
            <div>
              <Filters retrieveFilteredData={this.retrieveFilteredData} filterValues={this.state.filters}/>
            </div>
            <div>
              {this.state.spaceData.map(launchItem => (
                <LaunchCard data={launchItem} key={launchItem.flight_number} />
              ))
              }
            </div>
          </div>
          <div className="developer-div">
            <label className="developer">Developed by: </label>
            <label>Vijaylakshmi Sunagar</label>
          </div>
        </div>
      );
    }
  }
}

export default App;
