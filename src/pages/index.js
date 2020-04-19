import PostList from "../components/PostList";
import React, { useContext } from "react";
import { Context } from "../components/Context";
import { Link } from "gatsby";
export default () => {
  const { listData } = useContext(Context);
  return <PostList data={listData}></PostList>;
};
