import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/gallery`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    const [name, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [picture, setPicture] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [idEdit, setidEdit] = useState(0);
  
    
  
    const addTask = () => {
      console.log("add");
      if (tasks.length > 9) {
        alert(' Task name can not exceed 10 Tasks');
      }
      else if (name.trim() !== '') {
        const id = [tasks.length - 1] < 0 ? 1 : tasks[tasks.length - 1].id + 1;
        setTasks([...tasks, { id: id, name: name, weight: weight, picture: picture }]);
      }
      console.log('Tasks:', tasks);
    }
  
    const deleteTask = (id) => {
      console.log("Delete", id);
      const newTasks = tasks.filter((item) => +item.id !== +id);
      setTasks(newTasks);
    };
  
    const editTask = (id) => {
      console.log('Edit Task', id);
      setidEdit(id)
      let t = tasks.find((task) => +task.id === +id)
      setName(t.name)
      setWeight(t.weight)
      setPicture(t.picture)
      if (+idEdit === +id) { //Press Edit again
        let newTasks = tasks.map((task, index) => {
          if (+task.id === +id) {
            tasks[index].name = name
            tasks[index].weight = weight
            tasks[index].picture = picture
          }
          return task
        })
        setTasks(newTasks)
        setidEdit(0)
      }
    };
  
    const renderTask = () => {
      return tasks.map((item, index) => (
        <li key={index} className="relative m-4 border-dotted border-4 border-black  p-4 flex flex-col">
          <div className="absolute bottom-0 right-0 text-xl mr-2 text-[#fafafa] font-bold font-display">
            {index + 1}
          </div>{+idEdit !== +item.id ? (
            <div className="text-3xl font-mono tracking-tight text-black font-bold">{item.name}</div>) : (
            <input className="text-xl rounded-lg text-[#fafafa] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={name} onChange={(e) => setName(e.target.value)} />
          )
          }
          {+idEdit !== +item.id ? (
            <div className="text-xl font-mono tracking-tight text-black">{item.weight}</div>) : (
            <input className="text-xl rounded-lg text-[#fafafa] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={weight} onChange={(e) => setWeight(e.target.value)} />
          )
          }
          {+idEdit !== +item.id ? (
            <div className="mb-4 max-w-xs max-h-xs items-center"><img src={item.picture} /></div>) : (
            <input className="text-xl rounded-lg text-[#fafafa] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={picture} onChange={(e) => setPicture(e.target.value)} />
          )
          }
          <div className="mt-2 flex justify-center">
            <button className="mr-4 p-2 bg-red-600 hover:bg-red-00 rounded-lg drop-shadow-lg font-bold font-display transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none" onClick={() => deleteTask(item.id)}>Delete</button>
            <button className="p-2 bg-gray-300 hover:bg-gray-100 rounded-lg drop-shadow-lg font-bold font-display transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={() => editTask(item.id)}
            > Edit</button>
          </div>
        </li>
      ));
    };

    return (
        <Layout>
            <Head>
                <title>Your Gallery</title>
            </Head>
            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-100 border-r border-gray-200 py-40"><Navbar /></div>
                <div className="bg-gradient-to-r from-neutral-400 to-neutral-600 flex-1  animate-pulseonce">
                    
                    <div>
                    <div className=" flex flex-col items-center ">
      <h1 className="text-7xl font-mono tracking-tight text-gray-100 px-16 font-bold pt-12  font-display drop-shadow-lg">GALLERY</h1>
      {/* <h1 className="text-[#EEEEEE] text-1xl font-bold uppercase font-display"><img src={avatar_url} width="40" /> Power by <span >{login} </span> </h1> */}
      <div className="flex flex-col w-5/6 justify-around items-center mt-2 mb-2 ">
        <input placeholder="Art's name" className="text-xl text-[#262626] w-1/3 bg-[#EEEEEE] rounded-lg pl-4 mt-2 mb-2 font-bold outline-[#00ADB5] font-display" type="text" name="task" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Artist" className="text-xl text-[#262626] w-1/3 bg-[#EEEEEE] rounded-lg pl-4 mt-2 mb-2 font-bold outline-[#00ADB5] font-display" type="text" name="task" onChange={(e) => setWeight(e.target.value)} />
        <input placeholder="Picture(Link)" className="text-xl text-[#262626] w-1/3 bg-[#EEEEEE] rounded-lg pl-4 mt-2 mb-2 font-bold outline-[#00ADB5] font-display" type="text" name="task" onChange={(e) => setPicture(e.target.value)} />
        <button className="bg-gray-600 hover:bg-gray-500 text-gray-100 font-bold py-2 px-4 rounded drop-shadow-lgfont-display" onClick={addTask}>Add to gallery</button>
      </div>
      <ul className="flex flex-wrap mb-8">{renderTask()}</ul>
    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

