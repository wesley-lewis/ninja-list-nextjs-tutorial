import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  // completed till video lecture 6 of net ninja
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi quia ullam nostrum natus similique voluptas earum repudiandae eaque quos rerum libero error, impedit nobis. Quisquam temporibus atque esse ipsam.</p>

        <Link href="/ninja"><a className={styles.btn}>People Listing</a></Link>
      </div>
    </>
  )
}
