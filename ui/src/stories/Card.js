import React from 'react';

import './card.css';

export const Row = ({ children, header, last, border, bold, ...props }) => (
  <div
    className={[
      'row',
      `${header ? 'row--header' : null}`,
      `${last ? 'row--last' : null}`,
      `${border ? 'row--border' : null}`,
      `${bold ? 'row--bold' : null}`,
    ].join(' ')}
    {...props}
  >
    {children}
  </div>
);

export const Col = ({ children, right, ...props }) => (
  <div
    className={['col', `${right ? 'col--right' : null}`].join(' ')}
    {...props}
  >
    {children}
  </div>
);

export const Card = ({ children, ...props }) => (
  <div className="card" {...props}>
    {children}
  </div>
);

export const Example = ({ header, last, border, ...props }) => (
  <Card>
    <Row header={true}>
      <Col>SAVING</Col>
      <Col>Planning</Col>
    </Row>
    <Row border={true}>
      <Col>Emergency Fund</Col>
      <Col>$3,800.00</Col>
    </Row>
    <Row border={true} last={true}>
      <Col>Retirement Fund</Col>
      <Col>$0.00</Col>
    </Row>
    <Row bold={true}>
      <Col>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Add Account
        </a>
      </Col>
      <Col>Total: $3,800.00</Col>
    </Row>
  </Card>
);
