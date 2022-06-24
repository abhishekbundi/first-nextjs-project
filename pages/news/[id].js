import React from 'react'

export default function Post({sing_posts}) {
	const post=sing_posts[0];
	return (
		<div className="page">
		<div className="page_header center-align">
		<div className="heading"><h1>{post['title']['rendered']}</h1></div>
		</div>
		<div className="row">
		<div className="col s6 m6">
			<img src={post['_embedded']['wp:featuredmedia'][0]['source_url']}/>
		</div>
		<div className="col s6 m6">
			<div className="post_content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
		</div>
		</div>
		</div>
		);
	}

	export async function getServerSideProps(context) {
		const {id} = context.params;
		const res = await fetch(`http://kshatriyaschool.com/njs/wp-json/wp/v2/posts?_embed&slug==${id}`);
		const sing_posts = await res.json();
		return {
			props: {
				sing_posts,
			},
		};
	}