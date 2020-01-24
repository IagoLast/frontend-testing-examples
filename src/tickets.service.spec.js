import ticketsService from "./tickets.service";

describe('tickets.service', () => {
    describe('.hasFreeTickets(user)', () => {
        let dummyUser;
        describe('when the user is VIP', () => {
            beforeEach(() => {
                dummyUser = { isVip: true };
            });
            
        });

        describe('when the user is not VIP', () => {
            beforeEach(() => {
                dummyUser = { isVip: false };
            });
            
        });

        it('should give free tickets whe the user is VIP', () => {
            const dummyUser = { isVip: true };
            const actual = ticketsService.hasFreeTickets(dummyUser);
            expect(actual).toBeTruthy();
        });

        it('should not give free tickets whe the user is VIP', () => {
            const dummyUser = { isVip: false };
            const actual = ticketsService.hasFreeTickets(dummyUser);
            expect(actual).toBeFalsy();
        });
    });
});