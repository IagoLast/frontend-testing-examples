import ticketsService from "./tickets.service";

describe('tickets.service', () => {
    describe('.getTicketPrice(user)', () => {
        it('should return 0 whe the user is VIP', () => {
            const dummyUser = { isVip: true };
            const actual = ticketsService.getTicketPrice(dummyUser);
            expect(actual).toEqual(0);
        });

        it('should return 20 when the user is not VIP', () => {
            const dummyUser = { isVip: false };
            const actual = ticketsService.getTicketPrice(dummyUser);
            expect(actual).toEqual(20);
        });
    });
});