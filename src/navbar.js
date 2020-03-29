/*
 * Top Navigation bar for the site
 * Navbar State:
 *  You'll notice in the code we set a state to handle the scroll event. We do this by setting up
 *  a event listener for scroll, and created a handler/function to update our Navbar collapsed state
 *  depending on the offset pixels.
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarCollapsed: false,
            navbarSupportedContentCollapsed: true
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
        this.handleMobileMenuLinks = this.handleMobileMenuLinks.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        // Here we get the top offset of our scrolling element. If the offset is greater
        // than 100 pixels, we set the Navbar collapsed state to true, else false.
        let topVal = event.srcElement.scrollingElement.scrollTop;
        let classVal = (topVal > 100) ? true : false;
    
        this.setState({
            navBarCollapsed: classVal
        });
    }

    // This adds functionality to the hamburger icon to show/hide the mobile menu
    handleMobileMenu() {
        this.setState({
            navbarSupportedContentCollapsed: !this.state.navbarSupportedContentCollapsed
        });
    }

    // If the mobile menu is open, and a link is clicked, close the menu
    handleMobileMenuLinks() {
        if (!this.state.navbarSupportedContentCollapsed) {
            this.setState({
                navbarSupportedContentCollapsed: true
            });
        }
        
    }

    render () {
        const navbarClassNames = this.state.navBarCollapsed ? 'navbar navbar-expand-lg navbar-dark fixed-top collapsed' : 'navbar navbar-expand-lg navbar-dark fixed-top';
        const navbarSupportedContentClassNames = this.state.navbarSupportedContentCollapsed ? 'collapse navbar-collapse' : 'navbar-collapse';
        return (
            <nav className={navbarClassNames} id="navbar-main">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"><h5 className="text-uppercase">Rob Fleischmann</h5></a>
                    <button onClick={this.handleMobileMenu} className="navbar-toggler" type="button" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                    <div className={navbarSupportedContentClassNames} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link onClick={this.handleMobileMenuLinks} className="nav-link js-scroll-trigger" to="/">About</Link></li>
                            <li className="nav-item"><Link onClick={this.handleMobileMenuLinks} className="nav-link js-scroll-trigger" to="/experience">Experience</Link></li>
                            <li className="nav-item"><Link onClick={this.handleMobileMenuLinks} className="nav-link js-scroll-trigger" to="/hobbies">Hobbies</Link></li>
                            <li className="nav-item"><Link onClick={this.handleMobileMenuLinks} className="nav-link js-scroll-trigger" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
  }
  
  export default Navbar;