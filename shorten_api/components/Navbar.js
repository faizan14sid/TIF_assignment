import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/images/logo.svg'

export default function Navbar() {
    return (
        <>
            <ui>
                <li><Link href="/"><a><Image src={logo} alt="logo" height="30px" width="80px"/></a></Link></li>
                <li><Link href="/features"><a>Features</a></Link></li>
                <li><Link href="/pricing"><a>Pricing</a></Link></li>
                <li><Link href="/resources"><a>Resources</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
                <li><Link href="/signup"><a>Sign Up</a></Link></li>
            </ui>
        </>
    )
}
