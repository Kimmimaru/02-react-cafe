import React from "react";
import css from "./Notification.module.css";

function Notification(): JSX.Element {
  return <p className={css.message}>No feedback yet</p>;
}

export default Notification;
