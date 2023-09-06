// JavaScript code to enable question mark pointer and tooltips

// Function to change the mouse pointer to a question mark
function setQuestionMarkPointer() {
    document.body.classList.add('question-mark-pointer');
}

// Function to display a tooltip when hovering over an element
function displayTooltip(element, tooltipContent) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipContent;
    // You can also set the tooltip's content to an image or other HTML elements
    element.appendChild(tooltip);
}

// Event listener for a button that enables the question mark pointer
const helpButton = document.getElementById('help-button');
helpButton.addEventListener('click', setQuestionMarkPointer);

// Event listeners for elements that trigger tooltips
const elementsWithTooltips = document.querySelectorAll('.element-with-tooltip');
elementsWithTooltips.forEach((element) => {
    element.addEventListener('mouseover', () => {
        // Specify the tooltip content based on the element being hovered over
        const tooltipContent = 'Tooltip content for this element';
        displayTooltip(element, tooltipContent);
    });

    element.addEventListener('mouseout', () => {
        // Remove the tooltip when the mouse moves away from the element
        const tooltip = element.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});
