import { useEffect, useState } from "react"
import Card from "../../components/card/Card"
import { useAppContext } from "../../components/context/AppContext"

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s'

const Home = () => {
  const { meal } = useAppContext()
  const [foods, setFoods] = useState(null)

  useEffect(() => {
    const getFoods = async () => {
      const data = await fetch(url).then(request => request.json())
      console.log(data.meals);
      setFoods(data.meals)

    }
    getFoods()
  }, [])

  if (foods == null) {
    return <div>Loading...</div>
  }

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center mt-5"
      style={{ marginBottom: '85px' }}>

      {meal?.length > 0 ?
        meal.map(food => <Card
          key={food.idMeal}
          foodName={food.strMeal}
          foodImage={food.strMealThumb}
          foodID={food.idMeal}
        />)
        :
        foods.map(food => <Card
          key={food.idMeal}
          foodName={food.strMeal}
          foodImage={food.strMealThumb}
          foodID={food.idMeal}
        />)
      }

    </div>
  )
}

export default Home