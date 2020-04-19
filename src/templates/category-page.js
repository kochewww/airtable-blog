import React, { useContext } from "react";
import PostList from "../components/PostList";
import { Context } from "../components/Context";

export default (props) => {
  const { listData } = useContext(Context);
  const { category } = props.pageContext;
  const categoryData = listData.filter(({ node }) =>
    node.data.category.includes(category[0])
  );
  return <PostList data={categoryData}></PostList>;
};
