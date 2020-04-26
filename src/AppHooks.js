import React, { useEffect, useState } from 'react';
import ticketsService from './tickets.service';


function App() {
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState(20);
  const [code, setCode] = useState('');

  useEffect(() => {
    ticketsService.hasFreeTickets(code).then(setPrice);
  }, [code])

  return (
    <main className="App">
      <h1> Tickets for testing event.</h1>
      <h2>{`${price}€`}</h2>
      <form>
        <input type="email" id="name" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input autoComplete="off" type="text" id="code" placeholder="Código de descuento" value={code} onChange={e => setCode(e.target.value)}></input>
        <input type="button" value="Comprar tickets" />
      </form>
    </main>
  );
}

export default App;
