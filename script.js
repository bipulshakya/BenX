document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById('envelope');
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');

    let isOpen = false;

    envelope.addEventListener('click', function () {
        if (!isOpen) {
            // Open the envelope
            flap.style.height = "0px";
            letter.style.marginTop = "0px";
            envelope.classList.add('open');  // Add 'open' class to hide the emoji
            isOpen = true;
        } else {
            // Close the envelope
            flap.style.height = "150px";
            letter.style.marginTop = "100%";
            envelope.classList.remove('open');  // Remove 'open' class to show the emoji
            isOpen = false;
        }
    });
});
