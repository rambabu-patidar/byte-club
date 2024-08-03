import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import Discussion from "./pages/Discussion";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "discussions",
					element: <Discussion />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
