document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('taskForm');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const input1 = document.getElementById('input1').value;
        const input2 = document.getElementById('input2').value;
        const input3 = document.getElementById('input3').value;

        const paragraph = document.createElement('p');
        paragraph.textContent = `${input1}, ${input2}, ${input3}`;

        resultsDiv.appendChild(paragraph);

        form.reset();
    });
});
