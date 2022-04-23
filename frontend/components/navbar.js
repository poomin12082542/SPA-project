import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
        <Link href="/"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2   uppercase tracking-widest"> Home </li></Link> 
        <Link href="/login"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2  uppercase tracking-widest"> Login </li></Link> 
        <Link href="/register"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2   uppercase tracking-widest"> Register </li></Link>  
        <Link href="/memo"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2   uppercase tracking-widest"> Your Memo </li></Link>  
        <Link href="/aboutus"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2text-xs uppercase tracking-widest"> About Us</li></Link> 
        <Link href="/logout"><li className ="text-xl font-sans p-2 hover:text-gray-500 mx-6 mb-2  uppercase tracking-widest"> Logout </li></Link> 
        </ul>    
    </div>
)

export default Navbar