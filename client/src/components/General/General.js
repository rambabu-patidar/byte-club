import React from "react";

import Card from "../UI/Card";
import Trending from "./Trending";

import styles from "./General.module.css";

const General = () => {
	return (
		<Card className={styles.card}>
			<aside className={styles.aside}>
				<Trending />
			</aside>
		</Card>
	);
};

export default General;
