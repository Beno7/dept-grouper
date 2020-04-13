const people = [
  { name: 'Arisa', department: 'BP', gender: 'F' },
  { name: 'Ham', department: 'IT', gender: 'F' },
  { name: 'Alice', department: 'IT', gender: 'F' },
  { name: 'Anna', department: 'DA', gender: 'F' },
  { name: 'Larry', department: 'Sales', gender: 'M' },
  { name: 'Ria', department: 'Sales', gender: 'F' },
  { name: 'JD', department: 'Sales', gender: 'M' },
  { name: 'Thor', department: 'Sales', gender: 'M' },
  { name: 'Karl', department: 'Sales', gender: 'M' },
  { name: 'Rachel', department: 'Sales', gender: 'F' },
];

function listByGender(gender) {
  return people.filter(_p => _p.gender === gender);
}

function groupByDepartment() {
  const grouping = {};
  people.forEach(_p => {
    grouping[_p.department] = grouping[_p.department] || [];
    grouping[_p.department].push(_p);
  });
  return grouping;
}

// Test:
console.log('Department Grouper');
console.log('Males', listByGender('M').map(({name}) => name)); // Output: Includes Larry, JD, Thor, and Karl
console.log('Females', listByGender('F').map(({name}) => name)); // Output: Includes Arisa, Ham, Alice, Anna, Ria, and Rachel
console.log('Grouped', groupByDepartment()); // Output: People grouped by their department
