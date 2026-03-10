document.addEventListener("DOMContentLoaded", () => {
    
    // Tab & Page Switching
    const fileItems = document.querySelectorAll(".file-item");
    const pages = document.querySelectorAll(".page");
    const tabLabel = document.getElementById("tab-label");
    const tabIcon = tabLabel.querySelector("i");
    const breadcrumbFile = document.getElementById("breadcrumb-file");
    const langMode = document.getElementById("lang-mode");

    // File tab on top
    const fileIcons = {
        home: "fab fa-js text-yellow",
        about: "fab fa-markdown text-blue",
        projects: "fa-solid fa-code text-orange",
        contact: "fab fa-css3-alt text-css"
    };

    // Top file extensions
    const fileExtensions = {
        home: "index.js",
        about: "about.md",
        projects: "projects.html",
        contact: "contact.css"
    };

    // Bottom right file modes
    const fileModes = {
        home: "JavaScript",
        about: "Markdown",
        projects: "HTML",
        contact: "CSS"
    };

    fileItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all files
            fileItems.forEach(f => f.classList.remove("active"));
            // Add active to clicked
            item.classList.add("active");

            const targetId = item.dataset.target;

            // Show correct page
            pages.forEach(p => {
                p.classList.remove("active");
                if (p.id === targetId) p.classList.add("active");
            });

            // Update Tab & Breadcrumbs
            tabLabel.innerHTML = `<i class="${fileIcons[targetId]}"></i> ${fileExtensions[targetId]}`;
            breadcrumbFile.textContent = fileExtensions[targetId];
            langMode.textContent = fileModes[targetId];

            // Re-render line numbers based on new content height
            updateLineNumbers();
        });
    });


    // Dynamic Line Numbers
    const lineNumbersContainer = document.querySelector(".line-numbers");
    
    function updateLineNumbers() {
        const activePage = document.querySelector(".page.active");
        if (!activePage) return;
        
        // Estimate lines based on height (rough estimation for visual effect)
        const height = activePage.offsetHeight;
        const lineHeight = 21; // matched to CSS line-height
        const lines = Math.floor(height / lineHeight) + 5; // buffer
        
        let spans = "";
        for (let i = 1; i <= lines; i++) {
            spans += `<div>${i}</div>`;
        }
        lineNumbersContainer.innerHTML = spans;
    }

    // Call initially and on resize
    updateLineNumbers();
    window.addEventListener("resize", updateLineNumbers);
    // Also call after a short delay to allow DOM to settle
    setTimeout(updateLineNumbers, 100);


    // Typewriter Effect (Home Page)
    const textToType = "Welcome to ma Portfolio!";
    const typingElement = document.getElementById("typing-effect");
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing if we are on home page
    if (document.querySelector("#home.active")) {
        setTimeout(typeWriter, 1000);
    }
});