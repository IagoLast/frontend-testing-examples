export function hasFreeTickets(user) {
    if (user.isVip) {
        return true;
    }
    return false;
}

export default { hasFreeTickets };