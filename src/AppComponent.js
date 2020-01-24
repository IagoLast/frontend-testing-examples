import React, { Component } from 'react';
import ticketsService from './tickets.service';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isVip: undefined,
            hasFreeTickets: undefined,
        }
    }


    _onButtonClick() {
        const user = { isVip: this.state.isVip };
        const hasFreeTickets = ticketsService.hasFreeTickets(user);
        this.setState({ hasFreeTickets });
    }

    render() {
        return (
            <main className="App">
                <h1> Tickets for testing event.</h1>
                {
                    this.state.hasFreeTickets
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
                            value={this.state.isVip}
                            onChange={e => this.setState({ isVip: e.target.checked })} />
                        VIP
                    </label>
                    <br />
                    <input
                        data-testid="action-btn"
                        value="Check free tickets"
                        type="button"
                        onClick={this._onButtonClick.bind(this)} />
                </form>
            </main>
        );
    }
}
