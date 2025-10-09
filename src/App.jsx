import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Suspense, use, useEffect, useState } from "react";
import { AppsContext } from "./Context/AppsContext";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

const allAppPromise = fetch("/appData.json").then((r) => r.json());
function App() {
  const allApps = use(allAppPromise);
  const navigate = useNavigation();
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  useEffect(() =>{
    setIsLoading(true)
    if (navigate.state === "idle"){
      const loadTimer = setTimeout(()=>{
        setIsLoading(false)
      },parseInt( Math.random()*300))
      return ()=> clearTimeout(loadTimer);
    }
  }, [location.pathname, navigate.state])

  return (
    <>
      {/* nav */}
      <Navbar></Navbar>
      <main>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[70vh] py-7">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-[70vh] py-7">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            }
          >
            <AppsContext.Provider value={{ allApps }}>
              <Outlet></Outlet>
            </AppsContext.Provider>
          </Suspense>
        )}
        <ToastContainer></ToastContainer>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
