// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./Styles/welcome.module.css";
import UsernameInput from "./Components/usernameInput Component/UsernameInput";

const Welcome = (): JSX.Element => {
	// const [name, setName] = useState<string>("");
	// const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>
				WELCOME TO YOUR PERSONAL{" "}
				<span className={styles.text_sub_color}>TRAINING LOG</span>
			</h1>
			<h3 className={styles.subheading}>
				to start, please type in your name
			</h3>
			<UsernameInput
				// name={name}
				// setName={setName}
				// submitName={onSubmitHandler}
			/>
		</div>
	);
};

export default Welcome;
