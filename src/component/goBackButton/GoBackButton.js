import React, { Component } from "react";
import style from "./GoBackButton.module.css";
import arrow from './arrowBack.png';

export default class GoBackButton extends Component {
  handleGoBack = () => {
    const { from, search, history } = this.props;
    from && search ? history.push(`${from}${search}`) : history.push("/");
  };
  render() {
    return (
      <div className={style.buttonWrapper}>
            <img src={arrow} alt='arrow' widht='50'className={style.arrow} onClick={this.handleGoBack}/>
          
        {/* <button type="button" onClick={this.handleGoBack}>
          Go back
        </button> */}
      </div>
    );
  }
}
