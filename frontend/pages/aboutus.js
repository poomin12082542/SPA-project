import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const GetConfig = () => {
    return (<Layout>
        <Head>
            <title>About Us</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h2> About Us </h2>
            <b>เว็บไซต์นี้เป็นส่วนหนึ่งของวิชา 240-311 DISTRIBUTED COM AND WEB TECHNO  โดยมีจุดประสงค์ เพื่อบรรลุงานที่ได้รับมอบหมายเรื่อง Javascript Website Assignment  ซึ่งรายงานนี้มีเนื้อหาเกี่ยวกับ........ </b> 
            <b>ผู้จัดทำได้เลือก หัวข้อนี้ในการทำรายงาน เนื่องมาจากเป็นเรื่องที่น่าสนใจ ............... ผู้จัดทำจะต้องขอขอบคุณ อ.......... ผู้ให้ความรู้ และแนวทางการศึกษาเพื่อน ๆ ทุกคนที่ให้ ความช่วยเหลือมาโดยตลอด ผู้จัดทำหวังว่ารายงานฉบับนี้จะให้ความรู้ และเป็นประโยชน์แก่ผู้อ่านทุก ๆ ท่าน </b> 
            
            <ul>
                <li>จัดทำโดย</li>
                <li>นายภูมินทร์ พร้อมวงศ์</li>
                <li>รหัสนักศึกษา 61355512021</li>
                <li>คณะวิศกรรมศาสตร์ สาขาวิศกรรมคอมพิวเตอร์</li>
            </ul>
        </div>

    </Layout>)
}

export default GetConfig