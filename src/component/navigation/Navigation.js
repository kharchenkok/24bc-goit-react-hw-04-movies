import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <header className={style.border}>
              <nav>
        <ul className={style.navList}>
          <li>
            <NavLink
              to={{
                pathname: "/",
               
              }}
              className={style.navListItem}
              activeClassName={style.navListItemActive}
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/movies",
                
              }}
              className={style.navListItem}
              activeClassName={style.navListItemActive}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
            
        </header>
    );
};

export default Navigation;