const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

function getReports() {
    return new Promise((resolve, reject) => {

        const reports = [];
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject('Error reading file:', err);
            }

            const lines = data.trim().split('\n');

            lines.forEach(line => {
                const report = line.trim().split(/\s+/).map(Number);
                reports.push(report)
            });



            resolve(reports);
        });
    });
}


module.exports = { getReports };
