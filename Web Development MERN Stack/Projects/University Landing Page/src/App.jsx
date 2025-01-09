
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Developed from './components/Developed';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Developed />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Developed />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <Developed />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Developed />
          <Contact />
          <Footer />
        </>
      )
    },
    {
      path: "/portfolio",
      element: (
        <>
          <Navbar />
          <Developed />
          <Portfolio />
          <Footer />
        </>
      )
    },
    {
      path: "*",
      element: <Error />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
