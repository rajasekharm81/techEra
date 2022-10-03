import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/home'
import TechItemDetails from './components/techItemDetails'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={TechItemDetails} />
    </Switch>
  </>
)

export default App
