
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const imgURL = 'https://www.themealdb.com/images/ingredients/'

const FoodInfo = () => {
  const { foodId } = useParams()
  const [food, setFood] = useState(null)
  const [ingridients, setIngridiensts] = useState([])
  const [measures, setMeasures] = useState([])

  useEffect(() => {
    const getFood = async () => {
      const data = await fetch(url + foodId).then(request => request.json())
      console.log(data.meals);
      setFood(data.meals[0])
      const meal = data.meals[0]

      const arri1 = []
      const arri2 = []

      for (let i = 1; i < 21; i++) {
        if (meal[`strIngredient${i}`]?.length > 0) {
          arri1.push(meal[`strIngredient${i}`])
          arri2.push(meal[`strMeasure${i}`])
        }
      }
      setIngridiensts([...arri1])
      setMeasures([...arri2])

      setFood(data.meals[0])
    }
    getFood()
  }, [])

  if (food == null) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: "0 50px 150px" }}>

      <div className='d-flex mb-3'>
        <div>
          <h3 className='text-center'>{food.strMeal}</h3>
          <img style={{
            width: '418px'
          }} src={food.strMealThumb} alt="" />
        </div>
        <div>
          <h3 className='text-center'>Ingridients</h3>
          <div className='d-flex flex-wrap text-center gap-3 '>
            {ingridients.map((el, index) => {
              return <div>
                <img width={40} src={imgURL + el + ".png"} alt="" />
                <p>{measures[index]} {el}</p>
              </div>
            })}

          </div>

        </div>
      </div>

      <div>
        <h3 className='text-center'>Instructions</h3>
        <p className='fs-5' style={{ textAlign: 'justify' }}>{food.strInstructions}</p>
      </div>
      <div className='text-center'>
        <h3 > Video Instructions</h3>
        <iframe
          width="760"
          height="415"
          src={food.strYoutube.replace('watch?v=', "embed/")}
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen></iframe>
      </div>

    </div>

  )
}

export default FoodInfo