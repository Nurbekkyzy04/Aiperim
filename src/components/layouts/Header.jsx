import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const Header = () => {
  const { setMeal } = useAppContext()
  async function searchByName(form) {
    form.preventDefault()
    const name = form.target[0].value
    const data = await fetch(searchUrl + name).then(res => res.json())

    console.log(data);
     setMeal(data.meals)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{
      backgroundColor: '#40e0d0',
      color: '#fff',
      position: 'fixed',
      top: '0',
      left: 0,
      width: '100%',
      zIndex: 999,
    }}>

         {/* <img src="https://www.themealdb.com/images/logo-small.png" alt="" /> */}
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " >Recipe Guide</a>
          </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Category</a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={searchByName}>
            <input name='foodName' className="form-control me-2" type="search"
              placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Header