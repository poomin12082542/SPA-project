import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <Layout >
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-100 border-r border-gray-200 py-40"><Navbar /></div>

        <div className="flex-1 animate-pulseonce ">
          <img className=" object-cover w-full h-full filter grayscale blur-sm brightness-100 " src='images/bg.gif' alt='bg'></img>
          <div class=" absolute top-0 right-0 px-6 py-4">
            <h4 class="mb-3 text-6xl font-mono tracking-tight text-black pt-80 pr-96  pl-96 font-bold animate-pulse">MUSE MEMO</h4>
          </div>
          <div class=" absolute top-0 right-0 px-6 py-4">
            <h4 class="mb-3 text-2xl font-mono tracking-tight text-black pt-60 pr-96  pl-60 font-bold animate-pulse">WELCOME TO</h4>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
