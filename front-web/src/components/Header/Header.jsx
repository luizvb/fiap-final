import React from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu } from './HeaderElements'
import { useHistory } from 'react-router-dom'

const Header = ({ toggle }) => {
  const { push } = useHistory()
  const goPage = () => push('/manager')
  return (
    <div className='Container'>
      <Nav>
        <Logo onClick={() => {}}>
          <img
            src='https://thebridge.social/wp-content/uploads/2020/06/fiap.svg'
            alt='logo'
          />
        </Logo>
        <NavMenu>
          <NavLink className='menu-item' to='gallery' smooth>
            Galeria
          </NavLink>
          <NavLink className='menu-item' to='upload' smooth>
            Envie sua foto
          </NavLink>
          <NavLink className='menu-item' onClick={goPage}>
            Gerenciador
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  )
}

export default Header
