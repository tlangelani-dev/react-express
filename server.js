const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, fname: 'John', lname: 'Doe' },
        { id: 2, fname: 'Jane', lname: 'Doe' },
        { id: 3, fname: 'Larry', lname: 'Doe' }
    ];
    res.json(customers);
});

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`))
