const kironsTotalMark = {
    bangla: 45,
    english: 75,
    math: 97,
    geography: 94,
    history: 34,
    biology: 99
}
function getAvg(marks) {
    let totalmark = 0;
    let subjects = Object.keys(kironsTotalMark)
    for (const mark in marks) {
        totalmark += kironsTotalMark[mark]

    }
    const avgMarkIs = totalmark / subjects.length
    console.log(subjects);
    return avgMarkIs

}
const kironAvgMark = getAvg(kironsTotalMark)
console.log(kironAvgMark + "%");

