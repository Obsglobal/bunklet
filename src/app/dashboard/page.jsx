"use client"
import { useAppSelector } from '@/lib/hooks';
import React from 'react'
import PropertyUpload from './pages/property-upload';

const Dashboard = () => {
  const activeLink = useAppSelector((state) => state.event.activeLink);

  return (
    <div>
      {activeLink === "upload" && <PropertyUpload />}
    </div>
  )
}

export default Dashboard