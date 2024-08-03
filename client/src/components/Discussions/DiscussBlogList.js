import React from "react";

import BlogList from "../Blog/BlogList";

import styles from "./DiscussBlogList.module.css";

const DiscussBlogList = () => {
	return <BlogList discussionPage={true} />;
};

export default DiscussBlogList;
