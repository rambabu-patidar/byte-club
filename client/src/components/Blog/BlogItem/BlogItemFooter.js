import React from "react";

import { LuMessagesSquare } from "react-icons/lu";
import { CiBookmarkCheck } from "react-icons/ci";

import styles from "./BlogItemFooter.module.css";

const BlogItemFooter = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<span>
					<LuMessagesSquare />
				</span>
				<span>Discuss</span>
				<span>31 Likes</span>
			</div>
			<div>
				<span>tech used</span>
				<span>
					<CiBookmarkCheck />
				</span>
			</div>
		</footer>
	);
};

export default BlogItemFooter;
