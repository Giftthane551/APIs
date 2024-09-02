const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Custom Bubble Sort function to sort the characters
function bubbleSortString(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the characters if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr.join('');
}

// API POST endpoint to retrieve data
app.post('/Giftthane551@gmail.com', (req, res) => {
    const { data } = req.body;

    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Only String is accepted' });
    }

    // Convert string to an array of characters, sort them using Bubble Sort, and join them back into a word
    const sortedWord = bubbleSortString(data);

    // Respond with the sorted word in a JSON format
    res.json({ word: sortedWord });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`The Server API is running on port ${PORT}`);
});
