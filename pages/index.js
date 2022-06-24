import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Home({ posts})
{
  
  return (
    <div className="page">
    <div className="banner_image">
    <img src="https://www.rajasthantourplanner.com/images/rajasthanfabric.jpg" alt="banner_image" /></div>
    
  
    <div className="row">
      <div className="col s12 m12">
    
      </div>
    </div>
    <div className="row">
    <div className="col s12 m12 left-align blog_posts">
    <h5>Latest Post</h5>
    </div>
        {posts.map((post)=>
          {
            return (
              <div className="col s12 m3 center-align blog_posts" key={post.id}>
              <Link  href="/news/[id]" as={"/news/" + post.slug}>
                <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']} alt="aa" />
              </Link>
              <Link href="/news/[id]" as={"/news/" + post.slug }>
              <h3>{post.title.rendered}</h3>
              </Link>
              <div className="post_content" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
            </div>
              );

          })}
      </div>
    <div className="row">
      <div className="col s12 m12">
      <Link href="/shop" ><img src="https://wedleaf.com/wp-content/uploads/2021/03/lehenga-banner.jpg"/></Link>
      </div>
    </div>
    </div>
    );
  }

export async function getStaticProps() {
  const res = await fetch("http://kshatriyaschool.com/njs/wp-json/wp/v2/posts?_embed");
  const posts = await res.json();
  const ress = await fetch("http://kshatriyaschool.com/njs/wp-json/wp/v2/product?_embed");
  const latest_product = await ress.json();
  return {
    props: {
      posts,
      latest_product
    },
  };
}