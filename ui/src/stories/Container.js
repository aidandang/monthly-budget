import React from 'react';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './container.css';

const Example = () => {
  return (
    <div>
      <div className="space--medium">&nbsp;</div>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export const Container = ({ user, example, children }) => (
  <div className="container">
    <div className="header">
      <Navbar user={user} />
    </div>
    <div className="content">{example ? <Example /> : children}</div>
    <Footer />
  </div>
);

export default Container;
