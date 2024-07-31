import React from "react";

import BlogNavigation from "./BlogNavigation";
import BlogList from "./BlogList";
import General from "../General/General";

import styles from "./Blog.module.css";

const Blog = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<BlogNavigation />
				<BlogList />
			</main>
			<aside className={styles.aside}>
				<General />
			</aside>
		</div>
	);
};

export default Blog;
