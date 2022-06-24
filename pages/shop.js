import React from 'react'
import Link from 'next/link'


export default function shop({ posts })
{
	return (
		<div className="page">
		<div className="page_header center-align">
		<div className="heading"><h1>Shop</h1></div>
		</div>
		<div className="row">
				{posts.map((post)=>
					{
						return (
							<div className="col s12 m3 center-align blog_posts">
							<Link key={post.id} href="/product/[id]" as={"/product/" + post.slug}>
								<img src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
							</Link>
							<Link key={post.id} href="/product/[id]" as={"/product/" + post.slug}>
							<h3>{post.title.rendered}</h3>
							</Link>
						</div>
							);

					})}
			</div>
		</div>
		);
	}

export async function getStaticProps() {
  const res = await fetch("http://kshatriyaschool.com/njs/wp-json/wp/v2/product?_embed");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
