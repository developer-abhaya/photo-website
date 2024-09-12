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

    (function(w){
        var k="nudgify",n=w[k]||(w[k]={});
        n.uuid="fd136dce-2553-4c68-9940-86e9fac4daab";
        var d=document,s=d.createElement("script");
        s.src="https://pixel.nudgify.com/pixel.js";
        s.async=1;
        s.charset="utf-8";
        d.getElementsByTagName("head")[0].appendChild(s)
    })(window)