import React, { useState } from 'react';
import ticketsService from './tickets.service';

function App() {
  const [isVip, setIsVip] = useState(undefined);
  const [hasFreeTickets, setHasFreeTickets] = useState(undefined);

  function _onButtonClick() {
    const user = { isVip }
    setHasFreeTickets(ticketsService.hasFreeTickets(user));
  }

  return (
    <main className="App">
      <h1> Tickets for testing event.</h1>
      {
        hasFreeTickets
          ? <h1> Congrats, you have free tickets!</h1>
          : null
      }
      <form>
        <br />
        <input type="text" id="name" placeholder="First name"></input>
        <input type="number" id="exp" placeholder="Years of experience"></input>
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
          value="Check free tickets"
          type="button"
          onClick={_onButtonClick} />
      </form>
    </main>
  );
}

export default App;
