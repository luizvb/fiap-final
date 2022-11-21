import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import ManagerView from '../Manager/Manager'
import HomeView from '../Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={HomeView} path='/' exact />
      <Route component={ManagerView} path='/manager' exact />
    </BrowserRouter>
  )
}

export default Routes
