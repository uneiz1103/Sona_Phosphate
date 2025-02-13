document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a");

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active"); // Hide the menu
            });
        });
    }

    // Smooth Scroll Offset Fix
    const anchors = document.querySelectorAll("a[href^='#']");
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = 80; // Header height
            
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Image Hover Effects for Product Page
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Video Transparency & Blur Effect
    const video = document.querySelector(".background-video");
    const videoOverlay = document.querySelector(".video-overlay");

    if (video) {
        video.play(); // Auto-play video
        video.style.filter = "opacity(80%)"; // Apply transparency effect

        // Smooth fade-in effect on load
        video.style.transition = "opacity 1s ease-in-out";
        video.style.opacity = "1";
    }

    if (videoOverlay) {
        videoOverlay.style.backdropFilter = "blur(10px)"; // Apply background blur
        videoOverlay.style.transition = "backdrop-filter 1s ease-in-out"; // Smooth transition
    }

    // Contact Form Submission Animation and Handling
    const form = document.querySelector(".contact-form");
    const submitBtn = document.querySelector(".submit-btn");

    if (form && submitBtn) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent actual form submission

            // Change the button text and style
            submitBtn.innerText = "Sending...";
            submitBtn.style.backgroundColor = "#9b59b6"; // Light purple when sending

            // Simulate sending email
            setTimeout(() => {
                submitBtn.innerText = "Sent!";
                submitBtn.style.backgroundColor = "#27ae60"; // Green color for success

                // Reset form after sending
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerText = "Send Message";
                    submitBtn.style.backgroundColor = "#8e44ad"; // Back to purple
                }, 2000);
            }, 2000);
        });
    }

    // Blog Hover Effects (For Blog Cards)
    document.querySelectorAll(".blog-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.03)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Image Slider for Home Page (for multiple images)
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlides() {
        if (slides.length === 0) return; // Prevent errors if no slides exist

        Array.from(slides).forEach(slide => slide.style.display = "none"); // Hide all slides

        slideIndex = (slideIndex + 1) % slides.length; // Loop back when reaching the end
        slides[slideIndex].style.display = "block"; // Show the current slide

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides(); // Run when DOM is ready
});
