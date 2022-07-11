import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { routes } from './routes'

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.id} />
      ))}
    </Routes>
  </BrowserRouter>
)

export default Router
