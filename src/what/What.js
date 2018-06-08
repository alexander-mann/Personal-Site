import React, { Component } from 'react';
import './What.css';

class What extends Component {
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
        return(
                <div className="col-md-12" id="skillsMobile">
                    <span className="badge badge-secondary" id="oneSecMobile">JavaScript</span>
                    <span className="badge badge-secondary" id="oneSecMobile">Java</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">C</span>
                    <span className="badge badge-secondary"id="oneSecMobile">C++</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">jQuery</span>
                    <span className="badge badge-secondary"id="oneSecMobile">AJAX</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">HTML</span>
                    <span className="badge badge-secondary"id="oneSecMobile">CSS / SCSS</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">NodeJS</span>
                    <span className="badge badge-secondary"id="oneSecMobile">React</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">TypeScript</span>
                    <span className="badge badge-secondary"id="oneSecMobile">Angular</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">Heroku</span>
                    <span className="badge badge-secondary" id="oneSecMobile">Git</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">MongoDB</span>
                    <span className="badge badge-secondary"id="oneSecMobile">SQL</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">Illustrator</span>
                    <span className="badge badge-secondary"id="oneSecMobile">Photoshop</span>
                    <br/>
                    <span className="badge badge-secondary" id="oneSecMobile">Axure</span>
                    <span className="badge badge-secondary" id="oneSecMobile">Figma</span>
                </div>
        );
    } else{
        return (
            <div className="mx-auto">
                <div className="col-md-12" id="skills">
                    <span className="badge badge-secondary" id="oneSec">JavaScript</span>
                    <span className="badge badge-secondary" id="oneSec">C++</span>
                    <span className="badge badge-secondary" id="oneSec">C</span>
                    <span className="badge badge-secondary"id="oneSec">Java</span>
                    <span className="badge badge-secondary" id="twoSec">jQuery</span>
                    <span className="badge badge-secondary"id="twoSec">AJAX</span>
                    <span className="badge badge-secondary" id="twoSec">HTML</span>
                    <span className="badge badge-secondary"id="twoSec">CSS / SCSS</span>
                    <span className="badge badge-secondary" id="threeSec">NodeJS</span>
                    <span className="badge badge-secondary"id="threeSec">Angular</span>
                    <span className="badge badge-secondary" id="threeSec">TypeScript</span>
                    <span className="badge badge-secondary"id="threeSec">React</span>
                    <span className="badge badge-secondary" id="fourSec">Heroku</span>
                    <span className="badge badge-secondary" id="fourSec">Git</span>
                    <span className="badge badge-secondary" id="fourSec">MongoDB</span>
                    <span className="badge badge-secondary"id="fourSec">SQL</span>
                    <span className="badge badge-secondary" id="fiveSec">Illustrator</span>
                    <span className="badge badge-secondary"id="fiveSec">Photoshop</span>
                    <span className="badge badge-secondary" id="fiveSec">Axure</span>
                    <span className="badge badge-secondary" id="fiveSec">Figma</span>
                </div>
            </div>
        );
    }
    }
}

export default What;