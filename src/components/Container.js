import { Route, Switch } from 'react-router-dom';
import styles from './Container.module.css';
import Main from './MainComponent/Main';
import Navbar from './NavbarComponent/Navbar';
import About from './../pages/About';
import Contact from './../pages/Contact';
import NoMatch from './../pages/NoMatch';

function Container() {
  return (
    <div className={styles.Container}>
    <>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route path="/about" component={About} />

        <Route path="/contact" component={Contact} />

        <Route path="*" component={NoMatch} />
      </Switch>
    </>
    </div>
  );
}

export default Container;
