import React from "react";

import { FaRegHeart } from "react-icons/fa";

import styles from "./CommentList.module.css";
import rambabuImage from "../../../images/rambabu.png";

const COMMENT_LIST = [
	{
		author: "rambabu patidar",
		dateOfComment: new Date().toDateString(),
		commentText: "Excellent work!",
	},
	{
		author: "rambabu patidar",
		dateOfComment: new Date().toDateString(),
		commentText: "Excellent work!",
	},
	{
		author: "rambabu patidar",
		dateOfComment: new Date().toDateString(),
		commentText: "Excellent work!",
	},
];

const CommentList = () => {
	const commentCount = COMMENT_LIST.length;
	return (
		<section className={styles["comment-section"]}>
			<h3>{commentCount} comments</h3>

			<ul className={styles["comment-list"]}>
				{COMMENT_LIST.map((comment) => (
					<li key={Math.random().toString()} className={styles.comment}>
						<img
							src={rambabuImage}
							alt="Commentator img"
							width="50px"
							height="50px"
						></img>
						<div>
							<div className={styles.info}>
								<span>
									<p className={styles.author}>{comment.author}</p>
								</span>{" "}
								<time>{comment.dateOfComment}</time>
							</div>
							<p>{comment.commentText}</p>
							<div className={styles["interations"]}>
								<span>
									<FaRegHeart className={styles.heart} /> 12
								</span>
								<span>Reply</span>
								<span className={styles.replies}>5 reply</span>
							</div>
						</div>
					</li>
				))}
			</ul>

			<a
				href="http://www.example.com/"
				content="Load more comments"
				className={styles["load-comment"]}
			>
				see all comments
			</a>
		</section>
	);
};

export default CommentList;
