

// react-router-dom
import{Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./components/layouts"
import FoodInfo from "./pages/food-info/FoodInfo"

const App = () => {

  return (
    <div>
      <Routes>

        <Route path='/' element={ <Layout/>}>
        <Route index='/home' element={<Home/>}/>
        <Route path='/food-info/:foodId' element={<FoodInfo/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App