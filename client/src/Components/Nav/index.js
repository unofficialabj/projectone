import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import api from '../../utils/api'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate();

  const [data,setData] = useState({})
    

  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('Users'))
  // window.location.reload(false);
    setData(users)



  },[])
  const logout =async()=>{
    window.localStorage.removeItem('Users');
    const {data} = await api.get('/logout')
    navigate('/login')
    window.location.reload(false)
  
    
    
  }
  return (
            <div className="main">
        <ul className="list">
              {!data? (<>
                
                <li class="menu-items"> <Link to='/' className='link'>Home</Link></li>
                <li class="menu-items"> <Link to='/about' className='link'>About</Link></li>
                <li class="menu-items"> <Link to='/contact' className='link'>Contact</Link></li>
                <li class="menu-items"> <Link to='/register' className='link'>Sign Up</Link></li>
                <li class="menu-items"> <Link to='/login' className='link'>Log In</Link></li></>)
                :
                (
                <>
                <li class="menu-items"> <Link to='/' className='link'>Home</Link></li>
                <li class="menu-items"> <Link to='/about' className='link'>About</Link></li>
                <li class="menu-items"> <Link to='/contact' className='link'>Contact</Link></li>
                <li class="menu-items"> <Link to='/addPost' className='link'>Add Post</Link></li>
                <li class="menu-items"> <Link to='/post' className='link'>Post</Link></li>
                <li class="menu-items"> <Link to='/' className='link' onClick={logout} value='logout'>Log Out</Link></li>
              </>)}
                </ul>
                </div>

  )
}

export default Navbar