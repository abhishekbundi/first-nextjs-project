import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { useState } from 'react';
const Header = ()=>{
 const router = useRouter()
 function isActive(route){
   if(route== router.pathname){
     return "active"
   }
   else ""
 }
const [showMe, setShowMe] = useState(false);
function toggle(){
  setShowMe(!showMe);
}
return(
  <>
  <div className="navbar-fixed">
  <nav className="white">
  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
  <Link href="/"><a  className="brand-logo">JAIPURCART</a></Link>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
  <li className={isActive('/')}><Link href="/"><a >HOME</a></Link></li>
  <li className={isActive('/shop')}><Link href="/shop"><a >SHOP</a></Link></li>
  <li className={isActive('/about')}><Link href="/about"><a >ABOUT</a></Link></li>
  <li className={isActive('/news')}><Link href="/news"><a >NEWS</a></Link></li>
  <li className={isActive('/contact')}><Link href="/contact"><a>CONTACT</a></Link></li>
  </ul>
  </nav>
  </div>
  
   
  </>
  )
}


export default Header