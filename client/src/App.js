import React from 'react';
import Homepage from './Homepage'; 

function App() {
  // Fake data so your Homepage doesn't crash while we build it
  const fakeModel = {
    communities: [
      {
        name: "Great Hall",
        description: "Accio leftovers! Rescue campus food from the void.",
        startDate: "Feb 21, 2026",
        postIDs: [101, 102], 
        members: [1, 2, 3, 4, 5] 
      }
    ]
  };

  const fakePosts = [
    { id: 101, food: "3 Boxes of Cheese Pizza", location: "Computer Science Lounge", timePosted: "12:15 PM" },
    { id: 102, food: "Assorted Bagels", location: "Library Foyer", timePosted: "9:00 AM" }
  ];

  return (
    <div>
      {/* We are passing the fake data down to your component! */}
      <Homepage 
        title="Great Hall" 
        model={fakeModel} 
        posts={fakePosts} 
      />
    </div>
  );
}

export default App;