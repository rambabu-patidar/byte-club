import React from "react";

import Card from "../UI/Card";

import styles from "./Bookmark.module.css";

const BOOKMARK_ITEMS = [
	{
		title: "7 Tips for Developers to Improve Their Logical Thinking Skills",
		author: "Rambabu Patidar",
		likes: 122,
	},
	{
		title: "Getting started with frontend development with resources..",
		author: "Abhishek Sharma",
		likes: 34,
	},
	{
		title: "Getting started with frontend development with resources",
		author: "Abhishek Sharma",
		likes: 12,
	},
];

const Bookmark = () => {
	return (
		<Card className={styles.container}>
			<h2>Bookmarks</h2>
			<ul className={styles.items}>
				{BOOKMARK_ITEMS.map((item) => (
					<li key={item.title}>
						<h3>{item.title}</h3>
						<div className={styles.details}>
							<p>{item.author}</p>
							<span>{item.likes}</span>
						</div>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Bookmark;
