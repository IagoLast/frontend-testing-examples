import React, { useState } from 'react';
import ticketsService from './tickets.service';
import Checkbox from './components/Checkbox';


function App() {
  const [email, setEmail] = useState('');
  const [isVip, setIsVip] = useState(false);
  const price = ticketsService.getTicketPrice({ isVip })

  return (
    <main className="App">
      <h1> Tickets for testing event.</h1>
      <h2>{`${price}€`}</h2>
      <form>
        <input type="email" id="name" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <Checkbox id="isVip" value={isVip} onChange={setIsVip} text="VIP" />
        <input type="button" value="Buy tickets"  />
      </form>
    </main>
  );
}

export default App;
