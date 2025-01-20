const { getReports } = require("./dataParser")


function validateReport(report, isIncreasing) {
    for (let i = 1; i < report.length; i++) {
        const difference = Math.abs(report[i] - report[i - 1]);
        if (
            report[i - 1] < report[i] !== isIncreasing ||
            difference < 1 ||
            difference > 3
        )
            return false;
    }
}

getReports().then((reports) => {
    const safeReports = reports.filter(report => {
        if (report.length <= 1) return true;
        let isIncreasing = report[0] < report[1];
        for (let i = 1; i < report.length; i++) {
            const difference = Math.abs(report[i] - report[i - 1]);
            let some = [];

            if (report[i - 1] < report[i] !== isIncreasing) {
            console.log(report)
                
                if(report[i-1] < report[i]){
                    some = report.filter((_,index) => index !== i)
                }
                else{
                   some = report.filter((_,index) => index !== i-1)
                }
                console.log( some);
                return true;
            }

            if(report[i - 1] === report[i]){
            console.log(report)

                some = report.filter((_,index) => index !== i)
                console.log( some);
                return true;
            }

            if(difference > 3){
            console.log(report)

                some = report.filter((_,index) => index !== i)
                console.log(some)
                some = report.filter((_,index) => index !== i-1)
                console.log( some);
                return true;
            }

        }
        return true;
    })

})