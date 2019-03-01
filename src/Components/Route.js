import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SolutionWorkshops from "./SolutionWorkshops";
import SolutionDemos from './SolutionDemos';
import RequestHelp from './RequestHelp';

const RouteData = () => (
  <Router>
    <div>
      <Route exact path="/" component={SolDemos} />
      <Route exact path="/SolutionWorkshops" component={SolWorkshops} />
      <Route exact path="/RequestHelp" component={ReqHelp} />
    </div>    
  </Router>
)

const SolDemos = () => (
    <div>
      <SolutionDemos />
    </div>
);

const ReqHelp = () => (
  <div>
    <RequestHelp />
  </div>
);

const SolWorkshops = () => (
  <div>
    <SolutionWorkshops/>
  </div>
)

export default RouteData;