import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AditionalList.module.css'

const AditionalList = ({match,getHandleCast,getHandleReviews}) => {
    return (
        <>
         <h2 className={style.additionalTitle}>Additional information</h2>
        <ul>
          <li>
            <NavLink
              className={style.additionalItem}
              activeClassName={style.additionalItemActive}
              to={`${match.url}/cast`}
              onClick={getHandleCast}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.additionalItem}
              activeClassName={style.additionalItemActive}
              to={`${match.url}/reviews`}
              onClick={getHandleReviews}
              >
              Reviews
            </NavLink>
          </li>
        </ul>
              </>
    );
};

export default AditionalList;