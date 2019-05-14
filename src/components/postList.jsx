import React from "react";
import Post from "./post.jsx";
import { useStaticQuery, Link } from "gatsby";

const PostList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        postgres {
          allPosts {
            edges {
              node {
                id
                title
                author
                createdAt
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className="pListCont">
      {data.postgres.allPosts.edges.map(p => {
        return (
          <Link key={p.node.id} to={`/post/${p.node.id}`}>
            <Post
              post={p.node}
              title={p.node.title}
              author={p.node.author}
              created_at={p.node.createdAt}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PostList;
