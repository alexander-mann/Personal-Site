import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
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
                <div className="col-md-12" id="pnf-mobile-container">
                    <p id="pnf-mobile">Page Not Found</p>
                </div>
            );
        } else {
            return (
                <div className="mx-auto" id="pnf-container">
                    <h3 id="pnf">Page Not Found</h3>
                </div>
            );
        }
    }
}

export default NotFound;