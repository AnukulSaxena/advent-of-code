const { getReports } = require("./dataParser")


getReports().then((reports) => {
    const safeReports = reports.filter(report => {
        if (report.length <= 1) return true;

        let isIncreasing = report[0] < report[1];
        for (let i = 1; i < report.length; i++) {
            const difference = Math.abs(report[i] - report[i - 1]);
            if (
                report[i - 1] < report[i] !== isIncreasing ||
                difference < 1 || 
                difference > 3
            )
            return false;
        }
        return true;
    })

    console.log(" safe Reports : ", safeReports.length)
})