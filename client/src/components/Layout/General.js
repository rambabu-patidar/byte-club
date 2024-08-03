// this is layout for general content which we kept aside to main pages.

import React from "react";

import General from "../General/General";
import styles from "./General.module.css";

const GeneralLayout = () => {
	return (
		<>
			<aside className={styles.aside}>
				<General />
			</aside>
		</>
	);
};

export default GeneralLayout;
