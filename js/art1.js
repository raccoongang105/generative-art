// art1.js - Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('artCanvas1');
    const ctx = canvas.getContext('2d');

    // Set canvas size to fit the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Variables for fluid dynamics and color change
    let t = 0; // Time variable for animation
    let colorShift = 0; // Variable for controlling color shift via slider

    // Use Perlin noise for smooth randomness and calming effects
    function generateNoise(x, y, time) {
        // Simple noise generation for fluid-like patterns
        return Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time);
    }

    // Set up the color control slider
    const colorSlider = document.getElementById('colorSlider');
    colorSlider.addEventListener('input', (e) => {
        colorShift = parseInt(e.target.value);  // Adjust colorShift based on slider value
    });

    // Function to generate calming art with Perlin noise and fluid dynamics
    function drawArt() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a calming fluid effect with noise
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);

        // Loop to draw fluid dynamic pattern
        for (let y = -canvas.height / 2; y < canvas.height / 2; y += 10) {
            for (let x = -canvas.width / 2; x < canvas.width / 2; x += 10) {
                let noise = generateNoise(x, y, t);
                
                // Calming colors, evolving slowly over time, with colorShift applied
                let colorValue = Math.abs(noise * 255 + colorShift); // Adjust color based on slider
                // Ensure colorValue stays within 0-255 range
                colorValue = Math.min(Math.max(colorValue, 0), 255);
                ctx.fillStyle = `rgb(${colorValue}, ${colorValue * 0.5}, ${colorValue * 0.8})`;

                // Draw each point (small circles)
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();

        // Increase the time for animation and fluid dynamics
        t += 0.02;
        requestAnimationFrame(drawArt);
    }

    // Start the drawing loop
    drawArt();
});
