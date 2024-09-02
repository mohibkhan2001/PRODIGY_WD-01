window.addEventListener('scroll', () => {
    const value = window.scrollY;

    // Change background color of the navigation bar
    if (value > 500) {
        document.querySelector("nav").style.backgroundColor = "#071952";
        
        // Change the color of all nav links
        document.querySelectorAll("nav ul a").forEach(link => {
            link.style.color = "#fff";
        });
    } else {
        document.querySelector("nav").style.backgroundColor = "#37b7c3";
        
        // Revert the color of all nav links
        document.querySelectorAll("nav ul a").forEach(link => {
            link.style.color = "#071952";
        });
    }

    // Change the text color of the H1 as if filling from top
    const h1 = document.querySelector("h1");
    if (value > 100) {
        h1.style.backgroundImage = `linear-gradient(0deg, #071952 ${value / 2}%, #fff ${value / 2}%)`;
    } else {
        h1.style.backgroundImage = `linear-gradient(0deg, #fff, #fff)`;
    }

    // Increase and decrease the font size of the organization-name
    const organizationName = document.getElementById("organization-name");
    const task_text = document.querySelector('#Task');
    if (value > 100) {
        const newSize = 2 + value / 500; // Adjust the divisor to control the speed of size change
        organizationName.style.fontSize = `${newSize}rem`;
        task_text.style.fontSize = `${newSize}rem`;
    } else {
        organizationName.style.fontSize = "2rem"; // Default size
    }

    // Apply background color changes to sections as you scroll
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');

    if (value > 800) {
        section2.style.backgroundColor = "#ff6347"; // Tomato color
    } else {
        section2.style.backgroundColor = "#37b7c3"; // Original color
    }

    if (value > 1300) {
        section3.style.backgroundColor = "#ffdf00"; // Yellow color
    } else {
        section3.style.backgroundColor = "#071952"; // Original color
    }
});
window.addEventListener('scroll', () => {
    const value = window.scrollY;

    // Change background color of the navigation bar
    if (value > 500) {
        document.querySelector("nav").style.backgroundColor = "#071952";
        
        // Change the color of all nav links
        document.querySelectorAll("nav ul a").forEach(link => {
            link.style.color = "#fff";
        });
    } else {
        document.querySelector("nav").style.backgroundColor = "#37b7c3";
        
        // Revert the color of all nav links
        document.querySelectorAll("nav ul a").forEach(link => {
            link.style.color = "#071952";
        });
    }

    // Change the text color of the H1 as if filling from top
    const h1 = document.querySelector("h1");
    const maxScroll = window.innerHeight / 2; // You can adjust this value to your liking
    const scrollPercent = Math.min(value / maxScroll, 1); // Ensures scrollPercent stays between 0 and 1
    h1.style.backgroundPosition = `${scrollPercent * 100}% 100%`;
});
