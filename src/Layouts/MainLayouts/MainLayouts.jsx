import React from 'react'
import Header from '../../Components/Header/Header'
import Foother from '../../Components/Foother/Foother'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <>
    <Header/>
    <Outlet/> 
    <Foother/>
    </>
  )
}