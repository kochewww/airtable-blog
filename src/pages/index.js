import PostList from "../components/PostList";
import React, { useContext } from "react";
import { Context } from "../components/Context";
import { Link } from "gatsby";
import Layout from "../components/Layout";
export default () => {
  const { listData } = useContext(Context);
  return (
    <Layout>
      <PostList data={listData}></PostList>
      <Link to="categories/test-1">test 1 </Link>
      <Link to="categories/test-2">test 2 </Link>
    </Layout>
  );
};
