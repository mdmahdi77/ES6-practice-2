const students = [
    {id: 21, name: 'Omor Suni'},
    {id: 31, name: 'Mannaaaaa'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Dipjol'}
];
const names = students.map(s => s.name)
const ids = students.map(d => d.id)
const bigger = students.filter(b => b.id > 40)
const bigOne = students.find(bo => bo.id > 40)
console.log(bigOne)