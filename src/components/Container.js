import { Route, Switch } from "react-router-dom";
import styles from "./Container.module.css";
import Main from "./MainComponent/Main";
import Navbar from "./NavbarComponent/Navbar";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import NoMatch from "./../pages/NoMatch";
function Container() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className={styles.Container}>
            <Navbar />
            <Main />
          </div>
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
        </Route>
        <Route path="/contact">
          <Navbar />
          <Contact />
        </Route>
        <Route path="*">
          <Navbar />
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
}

export default Container;
