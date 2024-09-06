
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

// setting  react-router-dom
import { BrowserRouter } from 'react-router-dom'
import AppContext from './components/context/AppContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div
  style={{width: "1200px", margin: '0 auto'}}>

   <AppContext>
    <App/>
   </AppContext>

  </div>
  </BrowserRouter>,
)
