async function checkVoucher(voucher) {
    const raw = await fetch('/checkVoucher.json');
    const response = await raw.json();
    return response[voucher] || false;
}

export default {
    checkVoucher
}