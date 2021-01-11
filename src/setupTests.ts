// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
/* 
    I hadn't found the official enzyme-adapter for react-17, 
    so I used the unofficial one. 
    However, it doesn't seem like I'm to use Enzyme for a component testing 
    within this project in general, as all tests within this project are 
    more for demonstration purpose rather than for a real-life testing.

    So, in my opinion it is ok to use the unofficial package in this case,
    but, of course, I'm not going to use it in a real-life project without 
    permissions/instructions from senior collegues.
*/

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

