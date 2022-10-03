import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CouserItem'
import './index.css'

class Home extends Component {
  state = {techList: [], isLoading: false, error: false}

  componentDidMount() {
    this.getTechsList()
  }

  renderLoader = () => (
    <div data-testid="loader" className="loaderContainer">
      <Loader type="TailSpin" color="blue" />
    </div>
  )

  getTechsList = async () => {
    this.setState({isLoading: true, error: false})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      if (response.ok) {
        this.setState({techList: data.courses, isLoading: false, error: false})
      }
    } catch {
      this.setState({error: true})
    }
  }

  renderContentView = () => {
    const {techList} = this.state
    return (
      <div className="techListContainer">
        <h1 className="coursesHeading">Courses</h1>
        <ul className="techItemsContainer">
          {techList.map(each => (
            <CourseItem key={each.id} id={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }

  retry = () => {
    this.getTechsList()
  }

  failureView = () => (
    <div className="failureViewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>fail</h1>
      <p>para</p>
      <button type="button" onClick={this.retry}>
        Retry
      </button>
    </div>
  )

  render() {
    const {isLoading, error} = this.state
    let tobeRendered = ''
    if (error) {
      tobeRendered = this.failureView
    } else {
      tobeRendered = isLoading ? this.renderLoader : this.renderContentView
    }

    return <div className="HomeMainContainer">{tobeRendered()}</div>
  }
}

export default Home
