import React, { useState } from 'react';
import ticketsService from './tickets.service';
import Checkbox from './components/Checkbox';


function App() {
  const [email, setEmail] = useState('');
  const [isVip, setIsVip] = useState(false);

  const hasFreeTickets = ticketsService.hasFreeTickets({ isVip })

  return (

    <main className="App">
      <h1> Tickets for testing event.</h1>
      {
        hasFreeTickets
          ? <h1>0€</h1>
          : <h1>20€</h1>
      }
      <form>
        <input type="email" id="name" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <Checkbox id="isVip" value={isVip} onChange={setIsVip} text="VIP" />
        <input type="button" value="Buy tickets"  />
      </form>
    </main>
  );
}

export default App;
