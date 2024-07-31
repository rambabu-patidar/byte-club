import React from "react";

import styles from "./TrendingBlogItem.module.css";

const TrendingBlogItem = (props) => {
	return (
		<li>
			<div className={styles.article}>
				<h2>{props.title}</h2>
				<p className={styles.info}>
					{props.username} - {props.reads}
				</p>
			</div>
		</li>
	);
};

export default TrendingBlogItem;
