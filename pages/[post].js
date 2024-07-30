import React from "react";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Head from 'next/head';
export const runtime = 'experimental-edge';
const Post = (post) => {

    const [title, setTitle] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');

    // setTitle(post.response.title.rendered);
    // setFeaturedImage(post.response.yoast_head_json.og_image[0].url);
    return (
    <div>
      <Head>
        <title>Chinesse</title>
        <meta property="og:image" content={post.response.yoast_head_json.og_image[0].url} key="image" />
      </Head>
      <main>
        <h1>{post.response.title.rendered}</h1>
        <img src={post.response.yoast_head_json.og_image[0].url}/>
      </main>
    </div>
    )
};

export default Post;

Post.getInitialProps = async ({ req }) => {
    
    const baseUrl = 'https://animalp4radise.com';
              let response = await fetch(`${baseUrl}/wp-json/wp/v2/posts/13554`)
              response = await response.json();
              console.log(response);
    return { response }
}