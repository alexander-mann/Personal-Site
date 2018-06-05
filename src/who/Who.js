import React, { Component } from 'react';
import './Who.css';
// import image
import headshot from '../images/headshot.png';

class Who extends Component {
    render() {
        return (
            <div className="col-md-12" id="whoBk">
                <div className="row" >
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-5" id="margin">
                        <h2 id="title"><mark id="bk"> <strong>developer &amp; designer</strong> </mark></h2>
                        <p id="body"><mark id="bk">
                            I am a human-centric software developer and&nbsp;&nbsp; &nbsp;designer who is constantly striving to improve&nbsp; &nbsp;himself.
                            &nbsp;Practice makes perfect.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

export default Who;