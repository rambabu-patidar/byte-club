import React from "react";

import TajImage from "../../../images/Taj.jpg";

import styles from "./BlogItemMain.module.css";

const BlogItemMain = () => {
	return (
		<main className={styles.content}>
			<div className={styles.text}>
				<h2>My Blog heading</h2>
				<p>
					This is the content of my blog and you are going to read it this will
					be very funny and I bet you will love this conversion and this funny
					and I bet you will love this conversion and this
				</p>
			</div>
			<div className={styles.img}>
				<img src={TajImage} alt="user blog context" width="175px"></img>
			</div>
		</main>
	);
};

export default BlogItemMain;
