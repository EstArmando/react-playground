import React from "react";
import styles from "./Message.module.css";

const Message = ({ user }) => {
  
  if (!user.userName && !user.age) {
    return null;
  }

  if (!user.age) {
    return (
      <div>
        <p className={styles.error}>The age value is incorrect, please try again!</p>
      </div>
    );
  } else if (user.age < 18) {
    return (
      <div className={styles.warning}>
        <p>{user.userName} you are not allowed!</p>
      </div>
    );
  } else {
    return (
      <div className={styles.valid}>
        <p>Welcome {user.userName}</p>
      </div>
    );
  }
};

export default Message;
