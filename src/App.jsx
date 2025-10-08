import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Suspense, use } from "react";
import { AppsContext } from "./Context/AppsContext";
import { ToastContainer } from "react-toastify";

const allAppPromise = fetch("/appData.json").then((r) => r.json());
function App() {
  const allApps = use(allAppPromise);
  return (
    <>
      {/* nav */}
      <Navbar></Navbar>
      <main>
        <Suspense fallback={<div>Loadingggggg</div>}>
          <AppsContext.Provider value={{allApps }}>
            <Outlet></Outlet>
          </AppsContext.Provider>
        </Suspense>
        <ToastContainer></ToastContainer>
      </main>
    </>
  );
}

export default App;
