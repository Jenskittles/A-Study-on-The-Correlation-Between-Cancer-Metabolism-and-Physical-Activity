document.addEventListener('DOMContentLoaded', () => {
    fetch('Recon3D_GEMPRO.json')
        .then(response => response.json())
        .then(data => {
            createTable(data);
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

function createTable(data) {
    const tableHeaders = document.getElementById('table-headers');
    const tableBody = document.getElementById('table-body');

    // Clear any existing content
    tableHeaders.innerHTML = '';
    tableBody.innerHTML = '';

    // Extract keys from the first object to use as table headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHeaders.appendChild(th);
    });

    // Create table rows
    data.forEach(item => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = item[header];
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}
