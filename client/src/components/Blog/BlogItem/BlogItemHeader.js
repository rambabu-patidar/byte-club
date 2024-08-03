import React from "react";
import { CgProfile } from "react-icons/cg";

import styles from "./BlogItemHeader.module.css";

const BlogItemHeader = () => {
	return (
		<header className={styles["item-header"]}>
			<nav className={styles["user"]}>
				<div className={styles["user-profile"]}>
					<CgProfile />
				</div>
				<div className={styles["user-bio"]}>
					<h2>username</h2>
					<p>devlink . 21-05-2022</p>
				</div>
			</nav>
		</header>
	);
};

export default BlogItemHeader;
