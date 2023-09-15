import './App.css'
import Carts from './components/Carts/Carts'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
     <Header></Header>
<div className='md:flex'>

<Courses></Courses>
<Carts></Carts>
</div>


 
    </>
  )
}

export default App
