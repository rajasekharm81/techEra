import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class CourseItem extends Component {
  render() {
    const {item, id} = this.props
    return (
      <Link className="linkContainer" to={`/courses/${id}`}>
        <li>
          <button type="button" className="techItemContainer">
            <img src={item.logo_url} alt={item.name} />
            <p>{item.name}</p>
          </button>
        </li>
      </Link>
    )
  }
}

export default CourseItem
