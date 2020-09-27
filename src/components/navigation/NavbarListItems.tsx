import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  listItems: string[];
}

const NavbarListItems = ({ listItems }: Props) => {
  const ulListElements = listItems.map((el, idx) => (
    <li key={el + idx}>
      <Link className='list-item-btn' to={`/${el}`}>
        {el}
      </Link>
    </li>
  ));

  return <Fragment>{ulListElements}</Fragment>;
};

export default NavbarListItems;
