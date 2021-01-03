import './Loader.css'
import gif from './spinner.gif'

function Loader() {

  return (
    <>
      <div className="loader-container">
        <img className="loader" alt="loader" src={gif} />
      </div>
    </>
  )
}

export default Loader
