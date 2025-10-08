import React, { useState, use } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../Hero/Hero";
import SelectedCard from "../SelectedCard/SelectedCard";
import SingleCard from "../SingleCard/SingleCard";

const Cards = ({ cardPromise }) => {
  const cardData = use(cardPromise);

  const [tickets, setTickets] = useState(cardData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // --- When user clicks a ticket ---
const handleCardClick = (card) => {
  // Only add to inProgress if not already there
  if (!inProgress.find((t) => t.id === card.id)) {
    setInProgress([...inProgress, { ...card, status: "In Progress" }]);
    toast.info(`${card.title} added to In Progress`);
  }
};

  // --- When user clicks Complete button ---
const handleCompleteClick = (card) => {
  // Add to resolved
  setResolved([...resolved, { ...card, status: "Resolved" }]);

  // Remove from inProgress
  setInProgress(inProgress.filter((t) => t.id !== card.id));

  // Remove from tickets as well
  setTickets(tickets.filter((t) => t.id !== card.id));

  toast.success(`${card.title} marked as Resolved`);
};


  return (
    <div className="max-w-[1400px] mx-auto">
      {/* ✅ HERO SECTION */}
      <Hero
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mt-10 mx-2 lg:mx-0">
        {/* Left: Customer Tickets */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-xl font-bold mb-4">Customer Tickets</h1>
          {tickets.length === 0 ? (
            <p className="text-gray-500 text-sm">No pending tickets left!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tickets.map((card) => (
                <div key={card.id} onClick={() => handleCardClick(card)}>
                  <SingleCard card={card} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Task Status */}
        <SelectedCard
          inProgress={inProgress}
          resolved={resolved}
          onComplete={handleCompleteClick}
        />
      </div>
    </div>
  );
};

export default Cards;
