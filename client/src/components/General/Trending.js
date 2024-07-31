import React from "react";
import Card from "../UI/Card";

import styles from "./Trending.module.css";
import TrendingBlogItem from "./TrendingBlogItem";

const TRENDING_BLOGS = [
	{
		title: "first title",
		username: "Rambabu Patidar",
		reads: 502,
	},
	{
		title: "Second title",
		username: "Ayush Upadhayay",
		reads: 311,
	},
	{
		title: "Third title",
		username: "Abhishek Sharma",
		reads: 422,
	},
];

const Trending = () => {
	return (
		<Card className={styles.container}>
			<div className={styles.header}>
				<h2>Trending Articles</h2>
				<select className={styles["menu"]}>
					<option>1 Week</option>
					<option>1 Month</option>
					<option>3 Month</option>
					<option>6 Month</option>
				</select>
			</div>
			<ul className={styles["trending-articles"]}>
				{TRENDING_BLOGS.map((blog) => (
					<TrendingBlogItem
						key={blog.username}
						username={blog.username}
						title={blog.title}
						reads={blog.reads}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Trending;
