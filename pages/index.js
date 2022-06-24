import React from 'react'
import Link from 'next/link'


export default function Home({ posts })
{
  return (
    <div className="page">
    <div className="banner_image"><img src="https://www.rajasthantourplanner.com/images/rajasthanfabric.jpg"/></div>
    <div className="row">
    <h3>latest Post</h3>
        {posts.map((post)=>
          {
            return (
              <div className="col s12 m3 center-align blog_posts">
              <Link key={post.id} href="/news/[id]" as={"/news/" + post.slug}>
                <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
              </Link>
              <Link key={post.id} href="/news/[id]" as={"/news/" + post.slug}>
              <h3>{post.title.rendered}</h3>
              </Link>
              <div className="post_content" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
            </div>
              );

          })}
      </div>
    </div>
    );
  }

export async function getStaticProps() {
  const res = await fetch("http://kshatriyaschool.com/njs/wp-json/wp/v2/posts?_embed");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
