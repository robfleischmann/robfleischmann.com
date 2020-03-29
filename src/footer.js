import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center text-white-50" id="page-bottom">
        <div className="container">
            <div className="footer-social">
                <a className="px-3 text-white-50" href="mailto:rob@robfleischmann.com"><i className="fas fa-envelope fa-2x fa-fw"></i></a>
                <a className="px-3 text-white-50" href="https://www.linkedin.com/in/robfleischmann/"><i className="fab fa-linkedin-in fa-2x fa-fw"></i></a>
            </div>
            <div className="footer-copyright">&copy; 2020 Rob Fleischmann</div>
        </div>
    </footer>
  );
}

export default Footer;