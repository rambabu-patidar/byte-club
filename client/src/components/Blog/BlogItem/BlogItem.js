import React from "react";

import BlogItemHeader from "./BlogItemHeader";
import BlogItemMain from "./BlogItemMain";
import BlogItemFooter from "./BlogItemFooter";
import Comment from "../../Discussions/Comment/Comment";

import Card from "../../UI/Card";
import styles from "./BlogItem.module.css";

const BlogItem = (props) => {
	return (
		<li className={styles["blog-item"]}>
			<Card className={styles.container}>
				<BlogItemHeader />
				<BlogItemMain />
				<BlogItemFooter />
				{props.discussionPage && <Comment />}
			</Card>
		</li>
	);
};

export default BlogItem;
