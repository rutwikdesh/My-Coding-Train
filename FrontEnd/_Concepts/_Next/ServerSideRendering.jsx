// pages/index.js
import React from "react";

//* Here's a simple Next.js app that demonstrates Server-Side Rendering (SSR) for fetching and displaying a list of posts. This example uses an array of objects to represent the posts.

//* Page Component:
//* The Home component displays the list of posts.
//* The posts array is passed as a prop from the server-side rendering function.

export default function Home({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Server-Side Data Fetching:
//* getServerSideProps is a special Next.js function that runs on the server at request time.
//* Here, it simulates fetching data from an external source (e.g., an API or a database).

//? Rendering:
//? The fetched posts array is passed to the Home component and rendered on the page.

// Fetch data using SSR
export async function getServerSideProps() {
  // Simulate fetching posts from an external source (e.g., API or database)
  const posts = [
    { id: 1, title: "Post 1", body: "This is the first post." },
    { id: 2, title: "Post 2", body: "This is the second post." },
    { id: 3, title: "Post 3", body: "This is the third post." },
  ];

  // Pass posts as props to the component
  return {
    props: {
      posts,
    },
  };
}

//!Static Site Generation (SSG)
//* Refer this link: https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#:~:text=Site%20Generation%20(SSG)-,Static%20Site%20Generation%20(SSG),-Examples
