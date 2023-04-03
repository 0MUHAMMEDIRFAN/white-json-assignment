import React from 'react'
import Product from '../components/Product/Product'
import Sidebar from '../components/Sidebar/Sidebar'
import Title from '../components/Title/Title'
import Order from '../components/Order/Order'
import Navbar from '../components/Navbar/Navbar'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Navbar/>
      <Sidebar/>
      <Title/>
      <Product/>
      <Order/>
    </div>
  )
}

export default Dashboard
