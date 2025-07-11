import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
    const isAuth = isUserLoggedIn();
    const navigator= useNavigate();

    function handleLogout(){
        logout();
        navigator('/login')
    }

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <a href="http://localhost:8080/api/todos" className='navbar-brand'>Todo Management App</a>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    {
                        isAuth &&
                         <li className='nav-item'>
                    <NavLink to="/todos" className="nav-link">Todos</NavLink>
                    </li>
                    }
                  

                </ul>

                </div>
             
                <ul className='navbar-nav'>
                    {
                        !isAuth &&
                        <li className='nav-item'>
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                    }
                    {
                        !isAuth &&
                        <li className='nav-item'>
                    <NavLink to="/login" className="nav-link">login</NavLink>
                    </li>
                    }
                     {
                         isAuth &&
                        <li className='nav-item'>
                    <NavLink to="/login" className="nav-link" onClick={handleLogout}>LogOut</NavLink>
                    </li>
                    }
                    
                </ul>

          
            </nav>
            
        </header>
    </div>
  )
}

export default HeaderComponent