import React, { useContext, useState } from 'react'
import { profile } from '../App'

export default function Hardik() {
  const [state, setstate] = useContext(profile)
  return (
    <>
      <h1>{state[0].username} Is Good Boy </h1>
      <button><a href="Dashboard.js">Log Out</a></button>
    </>
  )
}
