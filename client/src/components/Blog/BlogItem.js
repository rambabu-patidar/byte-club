import React from "react";

import { CgProfile } from "react-icons/cg";
import { LuMessagesSquare } from "react-icons/lu";
import { CiBookmarkCheck } from "react-icons/ci";
import TajImage from "../../images/Taj.jpg";

import styles from "./BlogItem.module.css";
import Card from "../UI/Card";

const BlogItem = (props) => {
	return (
		<li>
			<Card className={styles.container}>
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
				<main className={styles.content}>
					<div className={styles.text}>
						<h2>My Blog heading</h2>
						<p>
							This is the content of my blog and you are going to read it this
							will be very funny and I bet you will love this conversion and
							this funny and I bet you will love this conversion and this
						</p>
					</div>
					<div className={styles.img}>
						<img src={TajImage} alt="user blog context" width="175px"></img>
					</div>
				</main>
				<footer className={styles.footer}>
					<div>
						<span>
							<LuMessagesSquare />
						</span>
						<span>Discuss</span>
						<span>31 Likes</span>
					</div>
					<div>
						<span>tech used</span>
						<span>
							<CiBookmarkCheck />
						</span>
					</div>
				</footer>
			</Card>
		</li>
	);
};

export default BlogItem;
