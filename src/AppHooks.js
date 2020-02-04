import React, { useState } from 'react';
import ticketsService from './tickets.service';

function App() {
  const [name, setName] = useState('');
  const [isVip, setIsVip] = useState(false);
  const [exp, setExp] = useState(false);

  const hasFreeTickets = ticketsService.hasFreeTickets({ isVip })

  return (

    <main className="App">
      <h1> Tickets for testing event.</h1>
      {
        hasFreeTickets
          ? <h2>0€</h2>
          : <h2>20€</h2>
      }
      <form>
        <br />
        <input type="text" id="name" placeholder="First name" value={name} onChange={e => setName(e.target.value)}></input>
        <input type="number" id="exp" placeholder="Years of experience" value={exp} onChange={e => setExp(e.target.value)}></input>
        <label htmlFor="isVip">
          <input
            id="isVip"
            type="checkbox"
            data-testid="isVip-checkbox"
            value={isVip}
            onChange={e => setIsVip(e.target.checked)} />
          VIP
        </label>
        <br />

        <input
          data-testid="action-btn"
          value="Buy tickets"
          type="button"
        />
      </form>
    </main>
  );
}

export default App;
