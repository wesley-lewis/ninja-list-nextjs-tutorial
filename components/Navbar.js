import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.jpg" width={128} height={77}/>
      </div>
      {/* Link components allows us to do client side navigation */}
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninja"><a>People Listing</a></Link>
    </nav>
  )
}

export default Navbar;