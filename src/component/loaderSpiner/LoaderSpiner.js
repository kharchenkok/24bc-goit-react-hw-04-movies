import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import style from './LoaderSpiner.module.css'

export default class LoaderSpiner extends Component {
    render() {
        return (
            <Loader
            className={style.loader}
            type="Watch" color="#536488" height={120} width={120}
            timeout={3000} //3 secs
          />
        )
    }
}
