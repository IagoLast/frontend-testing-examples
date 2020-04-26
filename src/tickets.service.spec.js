import ticketsService from "./tickets.service";
import apiClient from './api.client';

describe('tickets.service', () => {
    describe('.hasFreeTickets(code)', () => {
        
        it('should give free tickets when the code is valid', async () => {
            jest.spyOn(apiClient, 'checkVoucher').mockResolvedValue(true); // stub
            // The parameter is not userd (kinda smell...)
            const actual = await ticketsService.hasFreeTickets('dummy_code');
            expect(actual).toEqual(0);
        });

        it('should not give free tickets when the code is not valid', async () => {
            jest.spyOn(apiClient, 'checkVoucher').mockResolvedValue(false); // stub
            // The parameter is not userd (kinda smell...)
            const actual = await ticketsService.hasFreeTickets('dummy_code');
            expect(actual).toEqual(20);
        });
    });
});