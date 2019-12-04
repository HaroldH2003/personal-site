import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MobileNav from '../components/layout/MobileNav';

afterEach(cleanup);

const mobileNavAction = jest.fn();
const mobileNavIsOpen = false;

describe('Mobile Navigation', () => {
  it('renders correctly', () => {
    const mobileNavTree = render(<MobileNav />);
    expect(mobileNavTree).toMatchSnapshot();
  });

  it('opens/closes correctly', () => {
    const { debug, getByTestId } = render(
      <MobileNav mobileNavIsOpen={mobileNavIsOpen} action={mobileNavAction} />
    );
    const hamburger = getByTestId('hamburger');
    const mobileNav = getByTestId('mobileNav');

    debug();
  });
});
