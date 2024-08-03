import React, { useState } from "react";

import CommentButton from "./CommentButton";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import styles from "./Comment.module.css";

const Comment = () => {
	const [showCommentForm, setShowCommentForm] = useState(false);

	const toggleFormHandler = () => {
		console.log("Here");
		setShowCommentForm((prevState) => !prevState);
	};

	return (
		<div className={styles.container}>
			<CommentButton
				showCommentForm={showCommentForm}
				onToggleForm={toggleFormHandler}
			/>
			{/*send user image. */}
			<CommentForm
				showCommentForm={showCommentForm}
				onToggleForm={toggleFormHandler}
			/>
			<section>
				<CommentList />
			</section>
		</div>
	);
};

export default Comment;
