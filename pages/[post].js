import React from "react";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Head from 'next/head';
export const runtime = 'experimental-edge';
const Post = (post) => {

    const [title, setTitle] = useState(post?.response?.title?.rendered ? post.response.title.rendered : '');
    const [featuredImage, setFeaturedImage] = useState(post?.response?.yoast_head_json?.og_image[0]?.url ? post.response.yoast_head_json.og_image[0].url : '');

    return (
    <div>
      <Head>
        <title>Chinesse</title>
        <meta property="og:image" content={featuredImage} key="image" />
      </Head>
      <main>
        <h1>{title}</h1>
        <img src={featuredImage}/>
      </main>
    </div>
    )
};

export default Post;

Post.getInitialProps = async ({ req }) => {
    const baseUrl = 'https://animalp4radise.com';
              let response = await fetch(`${baseUrl}/wp-json/wp/v2/posts${req.url}`)
              response = await response.json();
    return { response }
}