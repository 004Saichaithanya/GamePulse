async function loadContent() {
    try {
        // Fetch the header HTML
        const headerResponse = await fetch('header.html');
        const headerHTML = await headerResponse.text();
        document.getElementById('headerpage').innerHTML = headerHTML;

        // Fetch the footer HTML
        const footerResponse = await fetch('footer.html');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer').innerHTML = footerHTML;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Call the function to load the header and footer
loadContent();
