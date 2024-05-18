const expenseForm = document.getElementById('expenseForm');
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        
        addExpense(amount, category, date);
        
        // Clear form fields after submission
        expenseForm.reset();
    });

    function addExpense(amount, category, date) {
        const newRow = expenseTable.insertRow();
        const cellAmount = newRow.insertCell(0);
        const cellCategory = newRow.insertCell(1);
        const cellDate = newRow.insertCell(2);
        const cellAction = newRow.insertCell(3);
        
        cellAmount.textContent = amount.toFixed(2);
        cellCategory.textContent = category;
        cellDate.textContent = date;
        cellAction.innerHTML = '<button onclick="editExpense(this)">Edit</button> <button onclick="deleteExpense(this)">Delete</button>';
    }

    function editExpense(button) {
        const row = button.parentNode.parentNode;
        const cells = row.getElementsByTagName('td');
        
        const newAmount = parseFloat(prompt("Enter new amount:", cells[0].textContent));
        const newCategory = prompt("Enter new category:", cells[1].textContent);
        const newDate = prompt("Enter new date:", cells[2].textContent);
        
        cells[0].textContent = newAmount.toFixed(2);
        cells[1].textContent = newCategory;
        cells[2].textContent = newDate;
    }

    function deleteExpense(button) {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }