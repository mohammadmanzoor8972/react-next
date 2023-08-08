import Link from 'next/link'
import React from 'react'
import styles from './NavBar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Route = [
    {id:1,
     page:'About Us',
    href:"/about"},
    {id:2,
        page:'Blog',
       href:"/blog"},
       {id:3,
        page:'Contact',
       href:"/contact"},
       {id:4,
        page:'Dashboard',
       href:"/dashboard"},
       {id:5,
        page:'Login',
       href:"/dashboard/login"},

       {id:6,
        page:'Register',
       href:"/dashboard/register"}
]
            // eslint-disable-next-line react/jsx-key
export default function NavBar() {
  return (
    <div>
        <ul className={styles.container}>
            {Route.map(item=><li><Link href={item.href}> {item.page}</Link></li>)}
        <li><DarkModeToggle/></li>
        </ul>
    
    </div>
  )
}
