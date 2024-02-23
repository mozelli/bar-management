import React from 'react';
import { Link } from 'react-router-dom';

type Links = {
  uri: string,
  label: string
}

type CardProps = {
  title: string,
  links: Links[]
}

function Card({title, links}: CardProps) {
  return (
    <div className="w-1/4 p-2 border rounded-sm">
      <h2 className='font-bold text-center'>{ title } </h2>
      <div className="">
        {
          links.map(link => {
            return (
              <ul>
                <li>
                  <Link to={link.uri}>{ link.label }</Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  );
}

export default Card;