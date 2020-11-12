import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoaderSpiner from '../loaderSpiner/LoaderSpiner';
import style from './SearchBar.module.css'

export default class SearchBar extends Component {
    render() {
        const {handleSubmit,handleChange,searchList,match,location,loading}=this.props
        console.log(this.props);
        return (
            <>
        {/* <form  className={style.searchForm}> */}
        <form onSubmit={handleSubmit} className={style.searchForm}>
          {/* <input type="text" name="search" /> */}
          <input type="text" name="search" onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
{loading? <LoaderSpiner/> : 
        <ul className={style.searchList}>
          {searchList.map(item => (
            <Link
              key={item.id}
              to={{
                pathname: `${match.url}/${item.id}`,
                state: {
                  from: location
                }
              }}
            >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>}
      </>
        )
    }
}
