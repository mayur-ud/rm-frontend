import NavBar from "./NavBar"
import './Layout.css'
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children} :LayoutProps) {
  return (
    <div>
        <NavBar/>
        <div className='main'>{children}</div>
    </div>
  )
}
