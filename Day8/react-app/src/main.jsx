import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Priyanshu Yadav"} email={"priyanshu.22b1540133@abes.ac.in"} mobile={9765180683}/>
    <Marks m1={82} m2={92} m3={89} />
    <DisplayMarks />
  </StrictMode>,
);

