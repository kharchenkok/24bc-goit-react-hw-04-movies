import React from 'react';
import style from './Cast.module.css'

const Cast = (props) => {
    const{castArr}=props
    // console.log(castArr);

    return (
        <ul className={style.castList}>
          {castArr.map(
            item =>
              item.profile_path && (
                <li key={item.credit_id} className={style.castListItem}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                    alt={item.name}
                    width="75"
                    className={style.castPosterImg}
                  />

                  <p>{item.name}</p>
                  <p>{item.character}</p>
                </li>
              ),
          )}
        </ul>
    );
};

export default Cast;