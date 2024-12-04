import React from 'react'
import CounterApp from './components/CounterApp';
import ImageApp from './components/ImageApp';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainLayout from './components/MainLayout';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/counter' element={<CounterApp/>}/>
          <Route path='/image' element={<ImageApp/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App