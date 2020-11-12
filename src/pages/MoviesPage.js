import React, { Component } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import { getFetchSearchMovies } from "../services/getFetch";
import getQueryParams from "../utilis/getQueryParams";

export default class MoviesPage extends Component {
  state = {
    searchQuery: "",
    searchList: [],
    error: null,
  };

     componentDidMount(){
        const {query} = getQueryParams(this.props.location.search)
        // console.log(query);

        query&& this.fetchMovies(query)
        
      }
      componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);
    
        if (prevQuery !== nextQuery) {
          this.fetchMovies(nextQuery);
        }
      }

  fetchMovies = async (query) => {
    await getFetchSearchMovies(query)
      .then((data) => {
        console.log(data);
        this.setState({
          searchList: data,
          searchQuery: "",
        });
      })
      .catch((error) => this.setState({ error: error }));
  };

  handleSubmit=(e,userSearch)=>{
    userSearch = this.state.searchQuery
    e.preventDefault()
    const { location, history } = this.props;
    history.push({ ...location, search: `query=${userSearch}` });
  }

  handleChange = ({target} )=> {
    this.setState({
      searchQuery: target.value
    });
  };

  render() {
      const{searchList}=this.state
    return (
      <>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchList={searchList} {...this.props}/>
        
      </>
    );
  }
}
