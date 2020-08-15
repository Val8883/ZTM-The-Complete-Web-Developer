import React from 'react';
import CardList from './components/CardList';
import { robots } from './data/robots';

export default function App() {
  return (
    <>
      <CardList robots={robots} />
    </>
  );
}
