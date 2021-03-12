import { Route, Redirect } from "react-router-dom";
import Home from './Home'
import Music from './Music'
import Albums from './Albums'
import Photos from './Photos'
import Events from './Events'
import About from './About'
import Lightbox from "./Lightbox";

const Routes = () => {
  return (
    <div>
      <Route path="/" >
        <Redirect to="/"/>
      </Route>
      <Route path="/" exact component={Home} />
      <Route path="/music" component={Music} />
      <Route path="/photography" exact component={Albums} />
      <Route path="/photography/album/:albumId" exact component={Photos} />
      <Route path="/photography/album/:albumId/:photoId" exact component={Lightbox} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default Routes
