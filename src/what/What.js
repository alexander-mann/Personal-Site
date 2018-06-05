import React, { Component } from 'react';
import './What.css';

class What extends Component {
    render() {
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
                    <span className="badge badge-secondary"id="fourSec">Wordpress</span>
                    <span className="badge badge-secondary" id="fiveSec">Illustrator</span>
                    <span className="badge badge-secondary"id="fiveSec">Photoshop</span>
                    <span className="badge badge-secondary" id="fiveSec">Axure</span>
                    <span className="badge badge-secondary" id="fiveSec">Figma</span>
                </div>
            </div>
        );
    }
}

export default What;