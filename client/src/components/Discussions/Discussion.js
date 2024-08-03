import React from "react";

import GeneralLayout from "../Layout/General";
import DiscussBlogList from "./DiscussBlogList";
import styles from "./Discussion.module.css";

const Discussion = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<DiscussBlogList />
			</main>
			<GeneralLayout />
		</div>
	);
};

export default Discussion;
