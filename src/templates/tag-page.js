import React, { useContext } from "react";
import PostList from "../components/PostList";
import { Context } from "../components/Context";
export default (props) => {
  const { listData } = useContext(Context);
  const { tag } = props.pageContext;
  console.log(tag);
  const tagData = listData.filter(({ node }) => node.data.tags.includes(tag));

  return <PostList data={tagData}></PostList>;
};
