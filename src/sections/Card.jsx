import React, { useState } from 'react';
import {CollapsibleCard} from '../components/CollapsibleCard';
import { cardsList,childList } from '../constants/constants';
import WindowLength from '../components/WindowLength';



const CardList = () => {
  let [cards,cnt] =cardsList(childList);
  const isWindowLarge = WindowLength();
  return (
    <div className={`flex flex-col  ${isWindowLarge?'':'w-[120%]'} space-y-4 p-4`}>
      {cards
      .map((card, index) => (
        <CollapsibleCard key={index}
          part={card.part}
          description={card.description}
          time={card.time}
          difficulty={card.difficulty}
          subTasks={card.subTasks}
          progress={card.progress}
          progressColor={card.progressColor}
          progressHeight={card.progressHeight}
        />
      ))}
    </div>
  );
};

export default CardList;