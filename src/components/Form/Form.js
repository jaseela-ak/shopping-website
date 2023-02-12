import Search from '../Search/Search';
import './Form.css';

const Form = () => {
  return (
    <div className='form_container'>
        <div className="content_container">
            {/* <div className="content"> */}
                <div><h3>Join Our News Letters</h3></div>
               <div> <h5>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster </h5>
               </div>
                <Search/>
            </div>
        {/* </div> */}

    </div>
  )
}

export default Form