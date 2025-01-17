const fs = require('fs');
const path = require('path');

// Path to your file
const filePath = path.join(__dirname, 'data.txt');

// Function to fetch and process the data
function getLists() {
    return new Promise((resolve, reject) => {
        const list1 = [];
        const list2 = [];

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject('Error reading file:', err);
            }

            const lines = data.trim().split('\n');

            lines.forEach(line => {
                const [num1, num2] = line.trim().split(/\s+/).map(Number);
                if (!isNaN(num1) && !isNaN(num2)) {
                    list1.push(num1);
                    list2.push(num2);
                }
            });

            list1.sort((a, b) => b - a);
            list2.sort((a, b) => b - a);

            resolve({ list1, list2 });
        });
    });
}

module.exports = { getLists };
