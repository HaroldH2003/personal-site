import React, { useState } from 'react';
import MobileNavWrapper from '../../styles/layout/MobileNavStyles';
import MobileNavMenu from './MobileNavMenu';
import Hamburger from './Hamburger';

const animTime = 370;

const MobileNav = () => {
  let [isRendered, setIsRendered] = useState(false);
  let [isOpening, setIsOpening] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isClosing, setIsClosing] = useState(false);

  const openMenu = () => {
    setIsRendered(true);
    // MobileNavMenu 'useEffect()' takes care of rest
  };

  const closeMenu = () => {
    setIsClosing(true);
    setIsOpen(false);
    console.log('Now closing...');
    setTimeout(() => {
      setIsClosing(false);
      setIsRendered(false);
      console.log('finally closed and unrendered!!!');
    }, animTime);
  };

  return (
    <MobileNavWrapper
      isRendered={isRendered}
      isOpening={isOpening}
      isOpen={isOpen}
      isClosing={isClosing}
      animTime={animTime}
    >
      <Hamburger
        isOpening={isOpening}
        isOpen={isOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      {isRendered && (
        <MobileNavMenu
          setIsOpening={setIsOpening}
          setIsOpen={setIsOpen}
          closeMenu={closeMenu}
          animTime={animTime}
        />
      )}
    </MobileNavWrapper>
  );
};

export default MobileNav;
