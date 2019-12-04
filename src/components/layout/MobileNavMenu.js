import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MobileNavMenu = ({ setIsOpening, setIsOpen, closeMenu, animTime }) => {
  useEffect(() => {
    console.log('Now rendered!');
    setIsOpening(true);
    console.log('Now opening...');
    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
      console.log('Finally opened!!!');
    }, animTime);
  }, []);

  return (
    <div data-testid="mobileNav" className="mobileNav">
      <div className="darkLayer" onClick={closeMenu} />
      <div id="mobileMenu">
        <nav>
          <ul>
            <li>
              <Link activeClassName="activePage" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/tutorials">
                Tutorials
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/about">
                About Me
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

MobileNavMenu.propTypes = {
  setIsOpening: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  animTime: PropTypes.number.isRequired,
};

export default MobileNavMenu;
