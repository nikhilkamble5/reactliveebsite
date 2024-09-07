// import React from 'react'
// import {  BrowserRouter as Router,Route, Routes, Navigate } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Service from './Service'
// import Contact from './Contact'
// import Navbar from './Navbar'
// // import Home from './Home'
// const App = () => {
//   return (
//     <>
//     <div className='container-fluid nav-bg'>
//       <div className="row">
//       <div className="col-10 mx-auto">
    
//       {/* <h1 className='text-center bg-dark p-3 text-light'>Router</h1> */}

//           <Navbar/>
//           <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/about' element={<About/>} />
//             <Route path='/service' element={<Service/>} />
//             <Route path='/contact' element={<Contact/>} />

//               <Route path='*'  element={<Navigate to='/'/>} />
//           </Routes>
//           </div>   
//       </div>
//     </div>
//     </>
//   )
// }

// export default App


import React from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
  return (
   
      <div className='container-fluid nav-bg'>
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </div>
        </div>
      </div>
   
  );
}

export default App;
