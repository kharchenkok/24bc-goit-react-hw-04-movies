// import React from 'react';
import TrendingMovies from "../component/trendingMovies/TrendingMovies";

import React, { Component } from "react";
import { getFetchTrendingMovies } from "../services/getFetch";
import ErrorMassage from "../component/errorMassage/ErrorMassage";
import LoaderSpiner from "../component/loaderSpiner/LoaderSpiner";

export default class HomePage extends Component {
  state = {
    trandingList: [],
    error: null,
    loading:false
  };

  async componentDidMount() {
      this.setState({loading:true})
    await getFetchTrendingMovies()
      .then((data) => {
        this.setState({
          trandingList: [...data],
          loading:false
        });
      })
      .catch((error) => this.setState({ error: error }))
    //   .finaly(()=>this.setState({loading:false}))
    // console.log(this.state.trandingList);
    // console.log(this.props);
  }
  render() {
    const { trandingList, error, loading } = this.state;
    return (
      <>
{loading&&<LoaderSpiner/>}
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
