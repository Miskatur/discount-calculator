document.getElementById('coupon').addEventListener('keyup', function (event) {
    const couponValue = event.target.value;
    const redeemCoupon = document.getElementById('btn-redeem');
    if (couponValue === 'DOM') {
        redeemCoupon.removeAttribute('disabled')
    }
    else {
        redeemCoupon.setAttribute('disabled', true)
    }
})

document.getElementById('btn-redeem').addEventListener('click', function () {
    const amountInputFieldValue = document.getElementById('amount-field')
    const amountValueString = amountInputFieldValue.value;
    const amountValue = parseFloat(amountValueString);

    const textTotalAmount = document.getElementById('total-amount');

    const discount = (amountValue * 30) / 100;

    const totalPrice = amountValue - discount;

    textTotalAmount.innerText = totalPrice;





})