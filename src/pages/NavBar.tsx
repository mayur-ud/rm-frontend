import './NavBar.css'
import { Image } from '@mantine/core'

function NavBar(){ 
  return (
    <div className='nav-container'>
        <div className='Nav-bg' >
            <div className='Nav-title'><Image src={'wf_logo.webp'}></Image></div>
            <div className='Nav-app'>Record Management AI Validator</div>
        </div>
    </div>
  )
}

export default NavBar