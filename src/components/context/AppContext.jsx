import React, { useContext, useState } from 'react'

const Food = React.createContext()
// closure js
const { Provider, Consumer } = Food

const AppContext = ({ children }) => {

  const [meal, setMeal] = useState(null)

  const data = {
    name: "Burger",
    meal,
    setMeal
  }

  return (
    <Provider value={data}>
      {children}
    </Provider>
  )
}

export default AppContext

// custom hook
export function useAppContext() {
  return useContext(Food)
}