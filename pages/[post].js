import React from "react";
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Head from 'next/head';
export const runtime = 'experimental-edge';
const Post = (post) => {

    const [title, setTitle] = useState(post?.title);
    const [featuredImage, setFeaturedImage] = useState(post.featuredImage);

    return (
    <div>
      <Head>
        <title>{title}</title>
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

    // Extract the text after "uploads/"
    response = await response.json();

            let url = response?.yoast_head_json?.og_image[0]?.url;

              const uploadsIndex = url.indexOf('uploads/') + 'uploads/'.length;
              const textAfterUploads = url.substring(uploadsIndex);

            let featuredImage = `localhost:3000/wp-content/uploads/${textAfterUploads}`
            let title = response?.title?.rendered;

    return { title, featuredImage }
}