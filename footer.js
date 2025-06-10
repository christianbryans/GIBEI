document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Get the footer content and style
            const footerContent = tempDiv.querySelector('.footer');
            const footerStyle = tempDiv.querySelector('style');

            // Create a new style element and append the styles
            if (footerStyle) {
                const newStyle = document.createElement('style');
                newStyle.textContent = footerStyle.textContent;
                document.head.appendChild(newStyle);
            }

            // Append the footer content
            if (footerContent) {
                document.getElementById('footer-placeholder').appendChild(footerContent);
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}); 