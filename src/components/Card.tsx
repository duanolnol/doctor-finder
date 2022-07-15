import React from "react";
import parse from "html-react-parser";
import { CardProps } from "./Card.type";

const Card = (props: CardProps) => {
  const showAbout = (text: string) => {
    const removeSpace = text.replace(/&nbsp;/g, " ");
    const parseInlineStyle = parse(removeSpace);
    return parseInlineStyle;
  };

  return (
    <div className="border border-gray-500 p-5">
      <div className="flex">
        <img
          src={props.imageURL}
          alt="Doctor"
          className="object-cover w-44 h-44"
        />
        <div className="ml-6">
          <div className="text-lg text-gray-700 font-medium mb-0.5">
            {props.name}
          </div>
          <div className="text-base text-gray-500 font-normal mb-1">
            {`${props.hospital} - ${props.specialization}`}
          </div>
          <div className="text-sm font-normal text-left mb-3">
            {showAbout(props.about)}
          </div>
          <div className="text-lg text-gray-700 font-bold text-right">
            {props.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
