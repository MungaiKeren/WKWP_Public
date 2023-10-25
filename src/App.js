import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import NotFound from "./Pages/404";
import Home from "./Pages/Home";
import Portal from "./Pages/Portal";
import News from "./Pages/News";
import Testimonials from "./Pages/Testimonials";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import NewsCreate from "./Pages/NewsCreate";
import NewsBlog from "./Pages/NewsBlog";
import PublicationSingleInstance from "./Pages/PublicationSingleInstance";
import Publications from "./Pages/Publications";
import ARC from "./Pages/ARC";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Projects from "./Pages/Projects";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/portal">
          <Portal />
        </Route>

        <Route exact path="/Services">
          <Services />
        </Route>

        <Route exact path="/news/create">
          <NewsCreate />
        </Route>

        <Route exact path="/publication/*">
          <PublicationSingleInstance />
        </Route>

        <Route exact path="/news">
          <NewsBlog />
        </Route>

        <Route exact path="/publications">
          <Publications />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/arc">
          <ARC />
        </Route>

        <Route exact path="/testimonials">
          <Testimonials />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/blog">
          <ContactUs />
        </Route>

        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
