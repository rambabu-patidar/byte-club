import React from "react";

import Card from "../../UI/Card";
import { MdArrowOutward } from "react-icons/md";
import styles from "./CommentForm.module.css";

const CommentForm = (props) => {
	const buttonClickHandler = () => {
		props.onToggleForm();
	};
	return (
		<>
			{props.showCommentForm && (
				<Card className={styles.container}>
					<p className={styles.supports}>Only text supported</p>
					<form className={styles["comment-form"]}>
						<input
							type="text"
							name="comment"
							placeholder="write you comment here."
						></input>
					</form>

					<footer className={styles.footer}>
						<a
							href="http://www.google.com/"
							content="Code of conduct"
							aria-label="Code of conduct"
						>
							Code of conduct{" "}
							<span>
								<MdArrowOutward />
							</span>
						</a>

						<div className={styles.controls}>
							<button onClick={buttonClickHandler}>Cancel</button>
							<button>Comment</button>
						</div>
					</footer>
				</Card>
			)}
		</>
	);
};

export default CommentForm;
