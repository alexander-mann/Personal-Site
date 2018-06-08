import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
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
                <a id="mobileHome"><mark id="mobileMarkA">Developer</mark><mark id="mobileMarkB">&</mark><mark id="mobileMarkC">Designer</mark></a>
                </div>
            );
        } else {
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
}

export default Home;