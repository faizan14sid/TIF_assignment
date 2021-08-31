import styles from '../styles/Home.module.css'
import Image from 'next/image'
import slide1 from '../public/images/illustration-working.svg'

export default function Home() {
  return (
    <div >
      <Image src={slide1} height="200px" width="350px"/>
    </div>
  )
}
