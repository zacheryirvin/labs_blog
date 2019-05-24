import React from "react";
import Post from "./post.jsx";
import { useStaticQuery, Link } from "gatsby";

const PostList = ({ pageContext }) => {
  const { group } = pageContext;
  const ids = group.map(({ node }) => {
    return node.id;
  });
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

  const pageData = data.postgres.allPosts.edges.filter(p => {
    if (ids.includes(p.node.id)) {
      return p;
    }
  });

  console.log(pageData);
  return (
    <div className="pListCont">
      {pageData.map(p => {
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
  //   return (
  //     <div className="pListCont">
  //       {group.map(({ node }) => {
  //         console.log(node);
  //       })}
  //       <div className="next" />
  //     </div>
  //   );
};
export default PostList;
