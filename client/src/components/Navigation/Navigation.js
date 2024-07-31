import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<nav className={styles.nav_bar}>
			<article className={styles.logo}>
				<h1>Node-Express-Blog</h1>
			</article>

			<ul className={styles["mid-nav"]}>
				<li>First</li>
				<li>Second</li>
				<li>Third</li>
			</ul>

			<article>
				<ul className={styles["right-nav"]}>
					<li>
						<CiSearch />
					</li>
					<li>Write</li>
					<li>
						<IoMoonOutline />
					</li>
					<li>
						<IoIosNotificationsOutline />
					</li>
					<li>Profile</li>
				</ul>
			</article>
		</nav>
	);
};

export default Navigation;
