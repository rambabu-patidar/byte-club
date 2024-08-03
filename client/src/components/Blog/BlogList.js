import React from "react";

import BlogItem from "./BlogItem/BlogItem";

import styles from "./BlogList.module.css";

const BLOGS = [
	{ title: "first" },
	{ title: "second" },
	{ title: "third" },
	{ title: "fourth" },
	{ title: "fifth" },
	{ title: "first" },
	{ title: "this" },
];

const BlogList = (props) => {
	return (
		<ul className={styles["blog-list"]}>
			{BLOGS.map((blog) => (
				<BlogItem
					key={Math.random().toString()}
					title={blog.title}
					discussionPage={props.discussionPage}
				/>
			))}
		</ul>
	);
};

export default BlogList;
