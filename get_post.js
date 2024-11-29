const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample in-memory data (use a database in real apps)
let items = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
];

// GET: Retrieve all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// GET: Retrieve a single item by ID
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// POST: Add a new item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
        description: req.body.description,
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT: Update an existing item by ID
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        item.name = req.body.name || item.name;
        item.description = req.body.description || item.description;
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// DELETE: Remove an item by ID
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);

    if (index !== -1) {
        const deletedItem = items.splice(index, 1);
        res.json(deletedItem);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
