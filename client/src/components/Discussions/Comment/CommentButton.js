import React from "react";

import Card from "../../UI/Card";
import styles from "./CommentButton.module.css";
import rambabuImage from "../../../images/rambabu.png";

const CommentButton = (props) => {
	const buttonClickHandler = () => {
		props.onToggleForm();
	};

	return (
		<>
			{!props.showCommentForm && (
				<Card className={styles.container}>
					<button
						className={styles["comment-button"]}
						onClick={buttonClickHandler}
					>
						<img
							className={styles["current-user"]}
							src={rambabuImage}
							alt="Logged in user"
							width="50px"
							height="50px"
						/>
						<p className={styles["comment-placeholder"]}>
							Add a thoughtful comment
						</p>
					</button>
				</Card>
			)}
		</>
	);
};

export default CommentButton;
