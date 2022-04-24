import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        setStatus("LOGOUT DONE!")
    }

    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 flex min-h-screen animate-pulseonce ">
                <div className="w-64 bg-gray-100 border-r border-gray-200 py-40"><Navbar /></div>

                <div className="flex-1 px-12 py-12 ">
                    
                    <div>
                        <h2 className='text-3xl font-mono tracking-tight text-black px-96 py-60 font-bold'> {status}  </h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
