import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ChessBoard, ChessCanvas } from "./components";
import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <StarsCanvas /> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Feedbacks /> */}

        <div className='relative z-0'>
          <Contact />
          <Feedbacks />
          <StarsCanvas />
     {/* <ChessCanvas /> */}
     <ChessBoard />
     {/* <Works /> */}

        </div>

          {/* <ChessCanvas /> */}
        
      </div>


      
    </BrowserRouter>
  );
}

export default App;
