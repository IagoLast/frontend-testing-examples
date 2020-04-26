export function getTicketPrice(user) {
    if (user.isVip) {
        return 0;
    }
    return 20;
}

export default { getTicketPrice };