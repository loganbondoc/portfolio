// Importing Director
import Director from './director.min.js';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Work from './components/Work';
import Popup from './components/Popup';
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
console.log("hello!");

// // React Component for Pop-Ups
function CurrentWorks() {
  const [openPopupData, setOpenPopupData] = useState(null);

  const descriptions = {
    'parkpal': "Hi, I'm ParkPal!",
    'smart-gate': "Through investigating the Sydney Train System, our team found issues pertaining to comfortability, efficiency, safety and navigation. To combat this we designed the \"Smart Gate\", and conducted user testing upon its usability and effectiveness within the real world.",
    'kamoy': 'A competition where groups were tasked with designing solutions for feelings of isolation through remote working. For this, we conducted user research and designed an application "Kamoy" that would streamline both communication and collaboration within the workplace.',
    'athlog': 'A web application designed to generate workout programs and track performance by logging an individual’s repetitions, workout dates and rest times. This was created as a part of an assessment for the DECO2017 unit, which taught the basics of web development utilising HTML, CSS, Javascript and Node.js.',
    'xxlchess': 'XXLChess, puts a spin on the regular game of chess with new pieces and a bigger 14x14 tile board. This game was created using the processing library in Java and uses the dependencies manager Gradle',
    'hamilton-island': "Through conducting user research and creating wireframes, I created a prototype website for the holiday destination Hamilton Island, with an aim to cultivate an active-wellness culture through the promotion of events and activities, while making accommodation options more accessible."
  };

  const openPopup = (id, title, image) => {
    const description = descriptions[id.toLowerCase()] || '';
    setOpenPopupData({ id, title, description, image });
  };

  const closePopup = () => {
    setOpenPopupData(null);
  };

  return (
    <div className="CurrentWorks">
      <h2>UX/UI Design Case Studies</h2>
      <span className="work-container">
        <Work
          id="memento"
          title="Memento"
          description="Addressing Post Party Blues"
          image="https://source.unsplash.com/100x100"
          openPopup={openPopup}
        />
        <Work
          id="athlog"
          title="Athlog"
          description="Tracking your athletic progress"
          image="https://source.unsplash.com/100x100"
          openPopup={openPopup}
        />
        <Work
          id="portfolio"
          title="Portfolio"
          description="A case study... FOR THE WEBSITE YOU'RE ON???"
          image="https://source.unsplash.com/100x100"
          openPopup={openPopup}
        />
        {/* Add more Work components for other "past-works" */}
      </span>
      {/* Render the currently open popup conditionally */}
      {openPopupData && (
        <Popup
          title={openPopupData.title}
          description={openPopupData.description}
          image={openPopupData.image}
          onClose={closePopup}
        />
      )}
    </div>
  );
}

export default CurrentWorks;

const domNode = document.getElementById('current-works');
const root = createRoot(domNode);
root.render(<CurrentWorks />);

//https://www.youtube.com/watch?v=cBOW8Nbb2PQ
// writing effect for designer part

