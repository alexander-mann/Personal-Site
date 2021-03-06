import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Who from './who/Who';
import What from './what/What';
import Why from './why/Why';
import NotFound from './not-found/NotFound';
// import images
import githubIcon from './images/github-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import emailIcon from './images/email-icon.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width < 1000;
    if (isMobile) {
      return (
        <div className="App" id="AppMobile">
          <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
          <div className="container">
            <div className="col-md-12">
              {/* header */}
              <div className="row">
                <div className="col-md-6" id="hdrMobile">
                    <NavLink to='/' id="hdr"><h1 id="mobileHdr">alexander<strong>mann</strong></h1></NavLink>
                </div>
                <div className="col-md-6" id="iconsMobile">
                  <a href='https://www.linkedin.com/in/alexandercmann/' target='_blank' rel="noopener noreferrer"><img id="mobileIconL" src={linkedinIcon} alt={"linkedin"} /></a>
                  <a href='https://github.com/alexander-mann' target='_blank' rel="noopener noreferrer"><img id="mobileIconG" src={githubIcon} alt={"github"} /></a>
                  <a href='mailto:alexandercmann@gmai.com'><img id="mobileIconE" src={emailIcon} alt={"email"} /></a>
                </div>
              </div>
              {/* navigation */}
              <nav className="navbar">
                <NavLink activeClassName='is-active' to='/who'> <button className="btn btn-outline-dark" id="whoMobile" type="button">who </button> </NavLink>
                <NavLink activeClassName='is-active' to='/what'> <button className="btn btn-outline-dark" id="whatMobile" type="button">what </button> </NavLink>
                <NavLink activeClassName='is-active' to='/why'> <button className="btn btn-outline-dark" id="whyMobile" type="button">why</button> </NavLink>
              </nav>
              {/* content */}
              <div id="siteBody">
                <Switch>
                  <Route exact path='/' render={() => (
                    <Home />
                  )} />
                  <Route exact path='/who' render={() => (
                    <Who />
                  )} />
                  <Route exact path='/what' render={() => (
                    <What />
                  )} />
                  <Route exact path='/why' render={() => (
                    <Why />
                  )} />
                  <Route render={() => (
                    <NotFound />
                  )} />
                </Switch>
              </div>
            </div>
          </div>
          {/* footer */}
          <footer>
            <div className="container">
              <div className="col-md-12">
                <hr />
                <a id="mobileFooter">created using <strong>React</strong></a>
              </div>
            </div>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="App" id="AppDesktop">
          <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
          <div className="container">
            <div className="col-md-12">
              {/* header */}
              <div className="row" id="header">
                <div className="col-md-8">
                  <NavLink to='/' id="hdr"><h1>alexander<strong>mann</strong></h1></NavLink>
                </div>
                <div className="col-md-4">
                  <a href='mailto:alexandercmann@gmai.com'><img id="email" src={emailIcon} alt={"email"} /></a>
                  <a href='https://www.linkedin.com/in/alexandercmann/' target='_blank' rel="noopener noreferrer"><img id="linkedin" src={linkedinIcon} alt={"linkedin"} /></a>
                  <a href='https://github.com/alexander-mann' target='_blank' rel="noopener noreferrer"><img id="github" src={githubIcon} alt={"github"} /></a>
                </div>
              </div>
              {/* navigation */}
              <div className="row" id="nav">
                <nav className="navbar mx-auto">
                  <NavLink activeClassName='is-active' to='/who'> <button className="btn btn-outline-dark" id="who" type="button">who </button> </NavLink>
                  <NavLink activeClassName='is-active' to='/what'> <button className="btn btn-outline-dark" id="what" type="button">what </button> </NavLink>
                  <NavLink activeClassName='is-active' to='/why'> <button className="btn btn-outline-dark" id="why" type="button">why</button> </NavLink>
                </nav>
              </div>
              {/* content */}
              <div className="row" id="siteBody">
                <Switch>
                  <Route exact path='/' render={() => (
                    <Home />
                  )} />
                  <Route exact path='/who' render={() => (
                    <Who />
                  )} />
                  <Route exact path='/what' render={() => (
                    <What />
                  )} />
                  <Route exact path='/why' render={() => (
                    <Why />
                  )} />
                  <Route render={() => (
                    <NotFound />
                  )} />
                </Switch>
              </div>
            </div>
          </div>
          {/* footer */}
          <footer>
            <div className="container" id="footer">
              <div className="col-md-12">
                <a id="ftr">created using <strong>React</strong></a>
              </div>
            </div>
          </footer>
        </div>
      );
    }

  }
}

export default App;
