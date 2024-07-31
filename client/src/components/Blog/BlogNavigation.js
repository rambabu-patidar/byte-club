import React from "react";
import { PiMagicWandLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { SlBadge } from "react-icons/sl";

import styles from "./BlogNavigation.module.css";

const BlogNavigation = () => {
	return (
		<nav className={styles["blog-nav"]}>
			<ul className={styles["blog-nav-list"]}>
				<li>
					<span className={styles.icon}>
						<PiMagicWandLight />
					</span>
					Personalized
				</li>
				<li>
					<span className={styles.icon}>
						<GoPeople />
					</span>
					Following
				</li>
				<li>
					<span className={styles.icon}>
						<SlBadge />
					</span>
					Featured
				</li>
			</ul>
		</nav>
	);
};

export default BlogNavigation;
