import React from 'react';
import Card from './Card';

export default function CardList({ robots }) {
  return (
    <ul>
      {robots.map((robot) => (
        <Card {...robot} key={robot.id} />
      ))}
    </ul>
  );
}
