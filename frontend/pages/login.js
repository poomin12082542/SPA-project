import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [ischeck, setIscheck] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div>
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
                Password
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-100 border-r border-gray-200 py-40"><Navbar /></div>
                <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 flex-1 px-96 pt-44 animate-pulseonce">
                    <h1 className='text-5xl font-mono tracking-tight text-black px-16 font-bold'>LOGIN</h1>
                    <br />
                    <div class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {loginForm()}
                    </div>
                    <div className='px-10'>
                        <input type="checkbox"
                            name="IsRememberMe"
                            onChange={(e) => setIscheck(e.target.value)}
                        />Remember me
                        <br /><br />
                    </div>

                    <div className='px-24'>
                        <form action="/memo">
                            <button type="submit" onClick={login} className="bg-gray-600 hover:bg-gray-500 text-gray-100 font-bold py-2 px-4 rounded">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
