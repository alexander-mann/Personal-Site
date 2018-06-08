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
            return (
                <div className="col-md-12">
                    <div className="col-md-12" id="skillsMobile">
                    <br/><br/>
                        <p id="skill"><mark id="skillSet">JavaScript&nbsp;&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp;&nbsp; C&nbsp;&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp;&nbsp; C++&nbsp;&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp;&nbsp; Java</mark></p>
                        <p id="skill"><mark id="skillSet">jQuery&nbsp;&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp;&nbsp; AJAX&nbsp;&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp;&nbsp; HTML&nbsp;&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp;&nbsp; CSS</mark></p>
                        <p id="skill"><mark id="skillSet">NodeJS <a id="yellow">/</a> Angular <a id="yellow">/</a> TypeScript <a id="yellow">/</a> React</mark></p>
                        <p id="skill"><mark id="skillSet">Heroku&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp; Git&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp; MongoDB&nbsp;&nbsp; <a id="yellow">/</a>&nbsp;&nbsp; SQL</mark></p>
                        <p id="skill"><mark id="skillSet">Illustrator <a id="yellow">/</a> Photoshop <a id="yellow">/</a> Axure <a id="yellow">/</a> Figma</mark></p>
                        <br/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mx-auto">
                    <div className="col-md-12" id="skills">
                        <span className="badge badge-secondary" id="oneSec">JavaScript</span>
                        <span className="badge badge-secondary" id="oneSec">C++</span>
                        <span className="badge badge-secondary" id="oneSec">C</span>
                        <span className="badge badge-secondary" id="oneSec">Java</span>
                        <span className="badge badge-secondary" id="twoSec">jQuery</span>
                        <span className="badge badge-secondary" id="twoSec">AJAX</span>
                        <span className="badge badge-secondary" id="twoSec">HTML</span>
                        <span className="badge badge-secondary" id="twoSec">CSS / SCSS</span>
                        <span className="badge badge-secondary" id="threeSec">NodeJS</span>
                        <span className="badge badge-secondary" id="threeSec">Angular</span>
                        <span className="badge badge-secondary" id="threeSec">TypeScript</span>
                        <span className="badge badge-secondary" id="threeSec">React</span>
                        <span className="badge badge-secondary" id="fourSec">Heroku</span>
                        <span className="badge badge-secondary" id="fourSec">Git</span>
                        <span className="badge badge-secondary" id="fourSec">MongoDB</span>
                        <span className="badge badge-secondary" id="fourSec">SQL</span>
                        <span className="badge badge-secondary" id="fiveSec">Illustrator</span>
                        <span className="badge badge-secondary" id="fiveSec">Photoshop</span>
                        <span className="badge badge-secondary" id="fiveSec">Axure</span>
                        <span className="badge badge-secondary" id="fiveSec">Figma</span>
                    </div>
                </div>
            );
        }
    }
}

export default What;