import React from 'react';

export default function Card({ name, username, email, id }) {
  return (
    <li className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        style={{ height: 200, width: 200 }}
        src={`http://robohash.org/${id}`}
        alt={`robot${id}`}
      />
      <div>
        <h2>{name}</h2>
        <h3
          style={{
            fontFamily: 'sega',
            fontWeight: '100',
            color: 'plum',
          }}
        >
          {username}
        </h3>
        <p>{email}</p>
      </div>
    </li>
  );
}
