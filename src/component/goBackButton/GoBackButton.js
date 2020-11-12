import React, { Component } from "react";
import style from "./GoBackButton.module.css";

export default class GoBackButton extends Component {
  handleGoBack = () => {
    const { from, search, history } = this.props;
    from && search ? history.push(`${from}${search}`) : history.push("/");
  };
  render() {
    return (
      <div className={style.buttonWrapper}>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
      </div>
    );
  }
}
