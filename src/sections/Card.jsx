import React, { useState } from 'react';
import {CollapsibleCard} from '../components/CollapsibleCard';
import { cardsList,childList } from '../constants/constants';




const CardList = () => {
  let [cards,cnt] =cardsList(childList);

  return (
    <div className="flex flex-col space-y-4 p-4">
      {cards
      .map((card, index) => (
        <CollapsibleCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;