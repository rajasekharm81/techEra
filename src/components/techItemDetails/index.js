import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class TechItemDetails extends Component {
  state = {itemDetail: '', isLoading: false, error: false}

  componentDidMount() {
    this.GetItemDetail()
  }

  GetItemDetail = async () => {
    this.setState({isLoading: true, error: false})
    const {location} = this.props
    const apiuUrl = `https://apis.ccbp.in/te${location.pathname}`

    try {
      const response = await fetch(apiuUrl)
      const data = await response.json()
      console.log(response)
      if (response.ok) {
        this.setState({
          itemDetail: data.course_details,
          isLoading: false,
          error: false,
        })
      }
      if (response.status === 404) {
        this.setState({error: true, isLoading: false})
      }
    } catch {
      this.setState({error: true, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loaderContainer">
      <Loader type="TailSpin" color="blue" />
    </div>
  )

  retry = () => {
    this.GetItemDetail()
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

  renderContentView = () => {
    const {itemDetail} = this.state
    return (
      <div className="itemsDetailsContainer">
        <div className="imageContainer">
          <img
            className="techImage"
            src={itemDetail.image_url}
            alt={itemDetail.name}
          />
        </div>
        <div className="contentContaineer">
          <h1>{itemDetail.name}</h1>
          <p>{itemDetail.description}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, error} = this.state
    let toBeRendered = ''
    if (error) {
      toBeRendered = this.failureView
    } else {
      toBeRendered = isLoading ? this.renderLoader : this.renderContentView
    }
    return <div className="itemDetailsMainContainer">{toBeRendered()}</div>
  }
}

export default TechItemDetails
