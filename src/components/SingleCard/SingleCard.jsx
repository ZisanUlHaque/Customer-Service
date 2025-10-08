import React from "react";
import golla from "../Cards/assets/Ellipse 22.png";
import calender from "../Cards/assets/Vector (1).png";
import inProgressIcon from '../Cards/assets/Ellipse 22 (1).png';
import resolveIcon from '../Cards/assets/Ellipse 22 (2).png';

const SingleCard = ({ card }) => {
  return (
    <div
      key={card.id}
      className="border-0 shadow-md bg-yellow-50 rounded-2xl p-5
             w-full h-[180px] min-h-[150px] flex flex-col justify-between"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">{card.title}</h1>
        <button
          className={`btn rounded-3xl text-sm px-3 font-medium
                ${
                  card.status === "Open"
                    ? "text-[#0B5E06] bg-[#B9F8CF]"
                    : card.status === "In Progress"
                    ? "text-[#7A5A00] bg-yellow-200"
                    : card.status === "Resolved"
                    ? "text-[#7A0000] bg-red-200"
                    : "text-gray-700 bg-gray-200"
                }
              `}
        >
          <div className="flex items-center gap-1">
            <img
              src={
                card.status === "Open"
                  ? golla
                  : card.status === "In Progress"
                  ? inProgressIcon
                  : card.status === "Resolved"
                  ? resolveIcon
                  : golla
              }
              alt=""
              className="w-3 h-3"
            />
            {card.status}
          </div>
        </button>
      </div>

      <p className="text-[#627382] text-sm">{card.description}</p>

      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-3">
          <p>#{card.number}</p>

          <span
            className={`px-2 py-1 rounded-lg font-semibold text-xs
                  ${
                    card.priority === "High"
                      ? "bg-red-200 text-red-700"
                      : card.priority === "Low"
                      ? "bg-green-200 text-green-700"
                      : card.priority === "Critical"
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }
                `}
          >
            {card.priority.toUpperCase()}
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <p>{card.customer}</p>
          <div className="flex items-center gap-1">
            <img src={calender} alt="" className="w-4 h-4" />
            <p>{card.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
