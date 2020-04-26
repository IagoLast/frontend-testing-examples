import apiClient from './api.client';

export async function hasFreeTickets(code) {
    const hasFreeTickets = await apiClient.checkVoucher(code);
    return hasFreeTickets ? 0 : 20;
}

export default { hasFreeTickets };