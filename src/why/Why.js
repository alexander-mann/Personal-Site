import React, { Component } from 'react';
import './Why.css';

class Why extends Component {
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
                <div className="col-md-12" id="whyMobileBk">
                    <h2 id="myWhyMobile"><br/>
                        <mark id="w"> To help build a better future by creating agile, human-centric user experiences that uniquely and efficiently address each user and problem in a natural way. </mark>
                    </h2>
                </div>
            );
        } else {
            return (
                <div className="mx-auto" id="whyBk">
                    <div className="col-md-12">
                        <h2 id="myWhy">
                            <mark id="w"> To help build a better future by creating agile, human-centric </mark>
                            <br />
                            <mark id="w"> user experiences that uniquely and efficiently address </mark>
                            <br />
                            <mark id="w"> each user and problem in a natural way. </mark>
                        </h2>
                    </div>
                </div>
            );
        }
    }
}

export default Why;