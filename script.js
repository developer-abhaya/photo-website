function callNumber() {
    // Replace this with the phone number you want to call
    const phoneNumber = "+9779808370638";
    
    // Use the tel: protocol to initiate a call
    window.location.href = `tel:${phoneNumber}`;
}

function handleKeyPress(event) {
    // Check if the Enter key (keyCode 13) is pressed
    if (event.keyCode === 13) {
        callNumber();
    }
}
