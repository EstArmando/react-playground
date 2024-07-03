import styles from "./WelcomeForm.module.css";
import Message from "./Message";
import { useState } from "react";

const WelcomeForm = () => {
  const [user, setUser] = useState({ userName: "", age: null });

  const handleSubmit = (e) => {
    const { userName, age } = e.target;
    setUser({
      userName: userName.value,
      age: parseInt(age.value),
    });
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1>Welcome Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          Name:
          <input type="text" name="userName" id="userName" />
        </label>
        <label htmlFor="age">
          Age:
          <input type="text" name="age" id="age" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <Message user={user} />
    </div>
  );
};

export default WelcomeForm;
