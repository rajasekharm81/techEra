import {Link} from 'react-router-dom'

// import './index.css'

const FailureView = () => (
  <div className="failureViewContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      alt="failure view"
    />
    <h1>Oops! Something Went Wrong</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <Link to="/">
      <button type="button">Retry</button>
    </Link>
  </div>
)

export default FailureView
