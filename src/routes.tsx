import { Route, Redirect } from "react-router-dom";
import Music from './Music'
import Photography from './Photography'
import Events from './Events'
import About from './About'

const Routes = () => {
  return (
    <div>
      <Route path="/">
        <Redirect to="/" />
      </Route>
      <Route path="/music" component={Music} />
      <Route path="/photography" component={Photography} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default Routes
