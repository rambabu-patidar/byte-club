import React from "react";

import BlogItem from "./BlogItem";

import styles from "./BlogList.module.css";

const BLOGS = [
	{ title: "first" },
	{ title: "second" },
	{ title: "third" },
	{ title: "fourth" },
	{ title: "fifth" },
	{ title: "first" },
	{ title: "second" },
	{ title: "third" },
	{ title: "fourth" },
	{ title: "fifth" },
	{ title: "first" },
	{ title: "second" },
	{ title: "third" },
	{ title: "fourth" },
	{ title: "fifth" },
	{ title: "first" },
	{ title: "second" },
	{ title: "third" },
	{ title: "fourth" },
	{ title: "fifth" },
	{ title: "first" },
	{ title: "second" },
	{ title: "third" },
	{ title: "fourth" },
	{ title: "fifth" },
];

const BlogList = () => {
	return (
		<ul className={styles["blog-list"]}>
			{BLOGS.map((blog) => (
				<BlogItem key={blog.title} title={blog.title} />
			))}
		</ul>
	);
};

export default BlogList;
