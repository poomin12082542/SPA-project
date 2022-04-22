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
        <div className="w-64 bg-gray-100 border-r border-gray-200"><Navbar /></div>

        <div className="flex-1">
          <h1 >Home page</h1>

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
