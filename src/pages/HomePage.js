// import React from 'react';
import TrendingMovies from "../component/trendingMovies/TrendingMovies";

import React, { Component } from "react";
import { getFetchTrendingMovies } from "../services/getFetch";
import ErrorMassage from "../component/errorMassage/ErrorMassage";

export default class HomePage extends Component {
  state = {
    trandingList: [],
    error: null,
  };

  async componentDidMount() {
    await getFetchTrendingMovies()
      .then((data) => {
        this.setState({
          trandingList: [...data],
        });
      })
      .catch((error) => this.setState({ error: error }));
    // console.log(this.state.trandingList);
    // console.log(this.props);
  }
  render() {
    const { trandingList, error } = this.state;
    return (
      <>
{!error && trandingList.length>0 &&
        <>
          <h2>Trending today:</h2>
          <TrendingMovies trandingList={trandingList} error={error} />
        </>
}
{error&&<ErrorMassage/>}



      </>
    );
  }
}
