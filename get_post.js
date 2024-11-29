const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON data
app.use(express.json());

// Sample in-memory data (use a database in real apps)
let items = [
    { id: 1, name: 'Chips', category: 'snack', link_foto: 'https://example.com/snack1.jpg', description: 'Delicious potato chips' },
    { id: 2, name: 'Burger', category: 'non-snack', link_foto: 'https://example.com/non-snack1.jpg', description: 'Cheesy burger' },
    { id: 3, name: 'Soda', category: 'minuman', link_foto: 'https://example.com/drink1.jpg', description: 'Refreshing soda drink' },
    { id: 4, name: 'Chocolate Bar', category: 'snack', link_foto: 'https://example.com/snack2.jpg', description: 'Sweet chocolate bar' },
    { id: 5, name: 'Pizza', category: 'non-snack', link_foto: 'https://example.com/non-snack2.jpg', description: 'Hot pizza slice' },
    { id: 6, name: 'Coffee', category: 'minuman', link_foto: 'https://example.com/drink2.jpg', description: 'Hot brewed coffee' },
];

// GET: Retrieve all items
app.get('/api/items', (req, res) => {
    res.status(200).json(items);
});

// GET: Retrieve an item by ID
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// GET: Retrieve items by category
app.get('/api/items/category/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    const filteredItems = items.filter(i => i.category.toLowerCase() === category);

    if (filteredItems.length > 0) {
        res.status(200).json(filteredItems);
    } else {
        res.status(404).json({ error: `No items found in category: ${category}` });
    }
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
