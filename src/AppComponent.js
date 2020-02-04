import React, { Component } from 'react';
import ticketsService from './tickets.service';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            isVip: undefined,
        }
    }

    render() {
        const user = { isVip: this.state.isVip };
        const hasFreeTickets = ticketsService.hasFreeTickets(user);

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
                    <input type="text" id="name" placeholder="First name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
                    <input type="number" id="exp" placeholder="Years of experience"></input>
                    <label htmlFor="isVip">
                        <input
                            id="isVip"
                            type="checkbox"
                            data-testid="isVip-checkbox"
                            value={this.state.isVip}
                            onChange={e => this.setState({ isVip: e.target.checked })} />
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
}
