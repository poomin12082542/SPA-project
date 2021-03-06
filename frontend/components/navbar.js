import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
        <img className=" h-24 w-24 ml-16 mb-16 mt-12 " src='images/logo.png' alt='logo'></img>
        <Link href="/"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2   uppercase tracking-widest"> Home </li></Link> 
        <Link href="/login"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2  uppercase tracking-widest"> Login </li></Link> 
        <Link href="/register"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2   uppercase tracking-widest"> Register </li></Link>  
        <Link href="/gallery"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2   uppercase tracking-widest"> Your Gallery </li></Link>  
        <Link href="/aboutus"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2text-xs uppercase tracking-widest"> About Us</li></Link> 
        <Link href="/logout"><li className ="text-xl font-sans p-2 text-red-700 hover:text-red-500 mx-6 mb-2 mt-28  uppercase tracking-widest"> Logout </li></Link> 
        </ul>    
    </div>
)

export default Navbar