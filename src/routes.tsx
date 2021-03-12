import { Route, Redirect } from "react-router-dom";
import Music from './Music'
import Albums from './Albums'
import Photos from './Photos'
import Events from './Events'
import About from './About'

const Routes = () => {
  return (
    <div>
      <Route path="/">
        <Redirect to="/" />
      </Route>
      <Route path="/music" component={Music} />
      <Route path="/photography" exact component={Albums} />
      <Route path="/photography/album/:id" component={Photos} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default Routes
