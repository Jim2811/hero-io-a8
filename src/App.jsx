import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import { createContext, Suspense, use } from 'react'

const AppsContext = createContext()
function App() {
  const appsPromise = fetch('/appData.json').then(r => r.json())
  const apps = use(appsPromise)
  return (
    <>
      {/* nav */}
      <Navbar></Navbar>
      <Suspense fallback={<span>Loading....</span>}>
        <AppsContext.Provider value={{apps}}>
          <Outlet></Outlet>
        </AppsContext.Provider>
      </Suspense>
    </>
  )
}

export default App
