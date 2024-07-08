function toggleMenu() {
  const popupMenu = document.getElementById('popupMenu');
  if (popupMenu.style.left === '0px') {
      popupMenu.style.left = '-100%';
  } else {
      popupMenu.style.left = '0px';
  }
}

function toggleMenu() {
    const popupMenu = document.getElementById('popupMenu');
    if (popupMenu.style.left === '0px') {
        popupMenu.style.left = '-100%';
    } else {
        popupMenu.style.left = '0px';
    }
}

function addRow() {
    const tableBody = document.getElementById('studentTableBody');
    const newRow = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        newCell.appendChild(input);
        newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
}

function uploadData() {
    // Placeholder function for uploading data
    alert('Upload Data Mahasiswa functionality coming soon!');
}

function saveData() {
    const tableBody = document.getElementById('studentTableBody');
    const rows = tableBody.getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = [];

        for (let j = 0; j < cells.length; j++) {
            const input = cells[j].getElementsByTagName('input')[0];
            rowData.push(input.value);
        }

        data.push(rowData);
    }

    console.log('Saved Data:', data);
    alert('Data has been saved to the console.');
}
