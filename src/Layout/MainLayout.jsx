import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Toaster } from 'react-hot-toast';

function MainLayout() {
  return (
    <section className="container mx-auto flex flex-col justify-between min-h-screen">
      <Toaster
        position="bottom-center"
        reverseOrder={true}
      />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  )
}

export default MainLayout
