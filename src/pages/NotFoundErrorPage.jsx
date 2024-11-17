import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundErrorPage = () => {
  return (
    <>
        <div>404 Not found</div>
        <Link to={"/"}>Go back to home</Link>
    </>
  )
}

export default NotFoundErrorPage