import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const AboutUs = ({ avatar_url, login }) => {
    return (<Layout>
        <Head>
            <title>About Us</title>
        </Head>
        <div className="flex min-h-screen">
            <div className="w-64 bg-gray-100 border-r border-gray-200 "><Navbar /></div>

            <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 flex-1 animate-pulseonce">
            <div className='px-60 pt-44'>
                <h2 className='text-5xl font-mono tracking-tight text-gray-100 px-44 font-bold drop-shadow-lg'> ABOUT US </h2>
                <br />
                <b className='text-l font-mono-thin tracking-tight text-black '>Art Gallery is website that allow you to make a list of your favorite arts. </b>
                <br />
                <b className='text-l font-mono-thin tracking-tight text-black '>This website is part of 240-311 Distributed Com And Web Techno mini project. Teach by Asst.Prof.Warodom Werapun  </b>
                <br /><br />
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                <ul className='font-bold'>
                    <li>Made by</li>
                    <li>Poomin Promwong</li>
                    <li>NO.6135512021</li>
                    <li>Student of Computer Engineering</li>
                </ul>
              </div>
              <div>
              <img className=" rounded-full  h-28 w-28    " src='images/poomin.jpg' alt='poomin'></img>
              </div>
               </div>
                </div>
            </div>
        </div>

    </Layout>)
}

export default AboutUs