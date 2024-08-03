import React from "react";

import Card from "../UI/Card";
import Trending from "./Trending";
import TopCommentator from "./TopCommentator";
import Bookmark from "./Bookmark";

import styles from "./General.module.css";

const General = () => {
	return (
		<Card className={styles.card}>
			<aside className={styles.aside}>
				<Trending />
				<TopCommentator />

				<Bookmark />
			</aside>
		</Card>
	);
};

export default General;
