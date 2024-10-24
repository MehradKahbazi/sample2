
const staff = [
    { sName: 'Ali', scores: [13, 17, 18, 19] },
    { sName: 'Reza', scores: [12, 8, 12, 17] },
    { sName: 'Amin', scores: [11, 10, 15, 11, 19, 18] },
    { sName: 'Nima', scores: [18, 13, 15, 12, 12] },
]

staff.map(item => {
    const avg = item.scores.reduce((acc, score) => acc + score)/item.scores.length;
    console.log(item.sName, ':', avg);
})

staff.map(item => {
    const avg = item.scores.reduce((acc, score) => acc + score)/item.scores.length;
    console.log(item.sName, ':', avg);
})