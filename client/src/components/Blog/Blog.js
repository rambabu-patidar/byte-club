import React from "react";

import BlogNavigation from "./BlogNavigation";
import BlogList from "./BlogList";
import GeneralLayout from "../Layout/General";

import styles from "./Blog.module.css";

const Blog = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<BlogNavigation />
				<BlogList discussionPage={false} />
			</main>
			<GeneralLayout />
		</div>
	);
};

export default Blog;
