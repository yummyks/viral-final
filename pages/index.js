import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // useEffect(()=>{
  //   console.log(post);
  // },[]); 

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <span>test</span>
      </main>
    </>
  )
}

// Home.getInitialProps = async ({ req }) => {
//   let userIP
//   if (req) {
//     userIP = req.headers['x-real-ip'] || req.connection.remoteAddress
//   }

//   const baseUrl = 'https://animalp4radise.com';
//             let response = await fetch(`${baseUrl}/wp-json/wp/v2/posts/13554`)
//             response = await response.json();
//             console.log(response);
//   return { response }
// }
