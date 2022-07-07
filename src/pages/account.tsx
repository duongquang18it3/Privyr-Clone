import React from "react";
import { Layout } from "../components/layout/layout";

const AccountPage = (): JSX.Element => {
	return (
		<>
			<main>
				<Layout
					hasBottomTabBar={true}
					bottomTabBarIndex={3}
				>
					<div className="column">
						<p>This is a Account page to test</p>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default AccountPage;
