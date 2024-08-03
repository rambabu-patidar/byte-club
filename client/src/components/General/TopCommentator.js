import React from "react";

import { RiUserFollowLine } from "react-icons/ri";
import Card from "../UI/Card";

import styles from "./TopCommentator.module.css";
import rambabuImage from "../../images/rambabu.png";

const TOP_COMMENTATOR = [
	{ name: "Rambabu Patidar", userImageUrl: "rambabuImage" },
	{ name: "Abhishek Sharma", userImageUrl: "rambabuImage" },
	{ name: "Deepak Yadav", userImageUrl: "rambabuImage" },
	{ name: "CS Dojo", userImageUrl: "rambabuImage" },
	{ name: "Navdeep Singh", userImageUrl: "rambabuImage" },
	{ name: "Virat Kohli", userImageUrl: "rambabuImage" },
];

const TopCommentator = () => {
	return (
		<Card className={styles.container}>
			<h3 className={styles.heading}>Top Commentator this Week</h3>
			<ul className={styles["user-list"]}>
				{TOP_COMMENTATOR.map((person) => (
					<li key={person.name} className={styles["user-item"]}>
						{/* change with actual image url */}
						<div className={styles["user-item-image-name"]}>
							<img
								src={rambabuImage}
								alt="user-profile-img"
								width="50px"
								height="50px"
							/>
							<div>{person.name}</div>
						</div>
						<span className={styles.follow}>
							<RiUserFollowLine />
						</span>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default TopCommentator;
