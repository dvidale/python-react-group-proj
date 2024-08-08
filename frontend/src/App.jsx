import { useState, useEffect } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])

function Home (){
const [data, setData] = useState({})

const getData = async ()=>{

const result = await fetch('/api')
const hello = await result.json()

setData(hello)
return

}

useEffect( ()=>{

  getData()

}, [])

return (
  <>
  <div> World... {data.message}.</div>
  </>
)

}


function App() {
  
  return (
    <>
      <RouterProvider router={ router }>
        <Home/>
      </RouterProvider>
    </>
  )
}

export default App
