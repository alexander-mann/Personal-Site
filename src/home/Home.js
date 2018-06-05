import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="mx-auto" id="home">
                <div className="col-md-12" id="collage">
                    <a id="n">producer</a>
                    <a id="m"><strong>EMPATHETIC</strong></a>
                    <a id="l">visual</a>
                </div>
                <br />
                <div className="col-md-12" id="collage">
                    <a id="j"><strong>designer</strong></a>
                    <a id="k">&nbsp;PROBLEM SOLVER</a>
                    <a id="i"><strong>human</strong></a>
                </div>
                <br />
                <div className="col-md-12" id="collage">
                    <a id="h"><strong>&nbsp;MODERN</strong></a>
                    <a id="g"><strong>CODER</strong></a>
                </div>
                <br />
                <div className="col-md-12" id="collage">
                    <a id="f">storyteller</a>
                    <a id="e"><strong>MUSICIAN</strong></a>
                    <a id="d">writer</a>
                </div>
                <br />
                <div className="col-md-12" id="collage">
                    <a id="c"><strong>creative</strong></a>
                    <a id="b">inquisitive</a>
                    <a id="a">ARTIST</a>
                </div>
            </div>
        );
    }
}

export default Home;