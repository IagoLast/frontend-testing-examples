import React, { Component } from 'react';
import ticketsService from './tickets.service';
import Checkbox from './components/Checkbox';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            isVip: false,
        }
    }

    render() {
        const user = { isVip: this.state.isVip };
        const price = ticketsService.getTicketPrice(user);

        return (
            <main className="App">
                <h1> Tickets for testing event.</h1>
                <h2>{`${price}€`}</h2>
                <form>
                    <input type="email" id="name" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                    <Checkbox id="isVip" value={this.state.isVip} onChange={isVip => this.setState({ isVip })} text="VIP" />
                    <input type="button" value="Buy tickets" />
                </form>
            </main>
        );
    }
}
