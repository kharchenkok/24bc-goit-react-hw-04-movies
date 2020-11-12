import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AditionalList.module.css'

const AditionalList = ({match}) => {
    return (
        <>
         <h2 className={style.additionalTitle}>Additional information</h2>
        <ul>
          <li>
            <NavLink
              className={style.additionalItem}
              activeClassName={style.additionalItemActive}
              to={`${match.url}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.additionalItem}
              activeClassName={style.additionalItemActive}
              to={`${match.url}/reviews`}
              >
              Reviews
            </NavLink>
          </li>
        </ul>
              </>
    );
};

export default AditionalList;