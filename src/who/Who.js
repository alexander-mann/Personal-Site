import React, { Component } from 'react';
import './Who.css';
// import image
import headshot from '../images/headshot.png';

class Who extends Component {
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
                <div className="col-md-12" id="whoBkMobile">
                    <div className="col-md-6" id="mobileWhoText">
                        <p><mark id="bk">
                            I am a human-centric software developer and designer who is constantly striving to improve himself by refining the skills I possess, and learning new ones.
                        </mark>
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-md-12" id="whoBk">
                    <div className="row" >
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-5" id="margin">
                            <h2 id="title"><mark id="bk"> <strong>developer &amp; designer</strong> </mark></h2>
                            <p id="body"><mark id="bk">
                            &nbsp;I am a human-centric software developer and&nbsp; 
                            &nbsp;designer who is constantly striving to improve&nbsp; 
                            &nbsp;himself by refining the skills I possess, and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                            &nbsp;learning new ones.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            </mark><br /><br />
                            </p>
                            <div id="typing">
                                <button className="btn btn-dark btn-block" type="button" id="agileBtn" disabled>
                                    <a id="iAm">I am...</a> <mark id="agile"><strong>Agile</strong></mark> &nbsp;<span className="fa fa-bolt" id="blk"></span>
                                </button>
                                <button className="btn btn-dark btn-block" type="button" id="designBtn" disabled>
                                    <a id="iAm">I am...</a> <mark id="design"><strong>Design-oriented</strong></mark> &nbsp;<span className="fa fa-eye" id="blk"></span>
                                </button>
                                <button className="btn btn-dark btn-block" type="button" id="userBtn" disabled>
                                    <a id="iAm">I am...</a> <mark id="user"><strong>User-centric</strong></mark> &nbsp;<span className="fa fa-child" id="blk"></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img id="headshot" src={headshot} alt={"headshot"} />
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Who;