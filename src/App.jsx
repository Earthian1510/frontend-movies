import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Header />
      <main className='container'>
        Home Page
      </main>
    </div>
  )
}
