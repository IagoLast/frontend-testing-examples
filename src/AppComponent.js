import React, { Component } from 'react';
import ticketsService from './tickets.service';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
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
                        ? <h1>0€</h1>
                        : <h1>20€</h1>
                }
                <form>
                    <input type="email" id="name" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>

                    <label className="Checkbox" htmlFor="isVip">
                        <input
                            id="isVip"
                            type="checkbox"
                            data-testid="isVip-checkbox"
                            value={this.state.isVip}
                            onChange={e => this.setState({ isVip: e.target.checked })} />
                        VIP
                    </label>

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
