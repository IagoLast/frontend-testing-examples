import React, { Component } from 'react';
import ticketsService from './tickets.service';
import Checkbox from './components/Checkbox';

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
                    <Checkbox id="isVip" value={this.state.isVip} onChange={isVip => this.setState({ isVip })} text="VIP" />
                    <input type="button" value="Buy tickets" />
                </form>
            </main>
        );
    }
}
