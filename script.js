////////////////////////////////////////////////
// Handling Ticket Increase and Decrease
function handleTicketChange(ticket, isIncrease) {
    let ticketCount = getInputValue(ticket);
    if (isIncrease) ticketCount++;
    if (!isIncrease && ticketCount > 0) ticketCount--;
    document.querySelector(`#${ticket}-input`).value = ticketCount;
    calculateTotalPrice()
}

////////////////////////////////////////////
// Handling input values
function getInputValue(ticket) {
    const economyTicketInput = document.querySelector(`#${ticket}-input`);
    const economyTicketCount = parseInt(economyTicketInput.value);
    return economyTicketCount;
}

///////////////////////////////////////////////////////////////////////
// Calculating all prices including subtotal, VAT and grand total
function calculateTotalPrice() {
    const totalTicketPrice = getInputValue('first') * 150 + getInputValue('economy') * 100;
    document.querySelector('#subtotal').textContent = totalTicketPrice;
    const VAT = totalTicketPrice * 0.1;
    document.querySelector('#charge').textContent = VAT;
    const grandTotalCost = totalTicketPrice + VAT;
    document.querySelector('#total').textContent = grandTotalCost;
}

////////////////////////////////////////////
//// Confirming the book

const openModal = function() {
    document.querySelector('.modal').style = "opacity: 1; visibility: visible; transition: all .3s"
}
const closeModal = function() {
    document.querySelector('.modal').style = "opacity: 0; visibility: hidden; transition: all .3s"
}

document.querySelector('#btnBook').addEventListener('click', openModal)
document.querySelector('.modal').addEventListener('click', closeModal)