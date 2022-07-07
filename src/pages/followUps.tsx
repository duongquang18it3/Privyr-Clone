import React from "react";
import { Layout } from "../components/layout/layout";

const FollowUpsPage = (): JSX.Element => {
  return (
    <>
      <main>
        <Layout hasTabBar={true} hasBottomTabBar={true} bottomTabBarIndex={2}>
          <div className="column">
            <p>This is a Followups page to test</p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default FollowUpsPage;
