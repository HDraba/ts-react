import React, { PropsWithChildren } from 'react';
import './Card.css';

// wrapping component
// out of the box custom components don't support classname, they support whatever you tell 'em to support

type CardProps = PropsWithChildren<{
  className: string;
}>;
// same as
// type CardProps = PropsWithChildren<{
// className: string;
// children: React.ReactNode;
// }>;

function Card(props: CardProps) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
