
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div >
            <div className='text-2xl font-mono tracking-tight text-black '>
                Username
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className='text-2xl font-mono tracking-tight text-black '>
                Email
            </div>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className='text-2xl font-mono tracking-tight text-black '>
                Password
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

        </div>
    )


    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <div className="flex min-h-screen">
    <div className="w-64 bg-gray-100 border-r border-gray-200 py-40"><Navbar /></div>
    <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 flex-1 px-96 pt-44 animate-pulseonce">
                <h1 className='text-5xl font-mono tracking-tight text-black px-12 font-bold'>REGISTER</h1>
                <br />
                <div class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {registerForm()}
                </div>
                <br />
                <div className='px-24'>
                    <button onClick={register} className="bg-gray-600 hover:bg-gray-500 text-gray-100 font-bold py-2 px-4 rounded">Register</button>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
