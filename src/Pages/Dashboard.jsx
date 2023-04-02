import React from 'react'
import Product from '../components/Product/Product'
import Sidebar from '../components/Sidebar/Sidebar'
import Title from '../components/Title/Title'

function Dashboard() {
  return (
    <div>
      <Sidebar/>
      <Title/>
      <Product/>
    </div>
  )
}

export default Dashboard
