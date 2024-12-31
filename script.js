document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById('envelope');
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');

    let isOpen = false;
    let canOpen = false;  // Initially, the envelope can't be opened

    // Function to check time
    function checkTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        if (hours === 0 && minutes === 0) {
            canOpen = true;
            envelope.classList.add('glow');  // Add a glowing effect
        } else {
            canOpen = false;
            envelope.classList.remove('glow');
        }
    }

    // Envelope click event
    envelope.addEventListener('click', function () {
        if (canOpen) {
            if (!isOpen) {
                flap.style.height = "0px";
                letter.style.marginTop = "0px";
                envelope.classList.add('open');
                isOpen = true;
            } else {
                flap.style.height = "150px";
                letter.style.marginTop = "100%";
                envelope.classList.remove('open');
                isOpen = false;
            }
        } else {
            alert("🎉 The envelope can only be opened at 12:00 AM! 🎆");
        }
    });

    // Check time every second
    setInterval(checkTime, 1000);
});
