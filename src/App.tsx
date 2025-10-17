
import {Header, Home, About, Footer, Services, ContactPage } from "./Data.ts"
import Projects from "./pages/Projects.tsx";




function App()  {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />  
      <ContactPage /> 
      <Footer />
    </>
  )
}


export default App;