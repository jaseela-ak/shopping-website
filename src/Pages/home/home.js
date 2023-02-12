import Achievement from '../../components/Achievements/Achievement';
import Categories from '../../components/CategoriesShop/Categories';
import Form from '../../components/Form/Form';

import './home.css';
function Home() {
  return (
    <div>
      <Categories/>
      <Achievement/>
     <Form/>
    </div>
  )
}

export default Home