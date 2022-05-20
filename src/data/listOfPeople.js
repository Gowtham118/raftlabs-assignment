let listOfPeople = { nodes: [], entityRelations: {} };

const initialInput = [
  ["Sameer", "Aayushi"],
  ["Aayushi", "Bhaskar"],
  ["Sameer", "Kamalnath Sharma"],
  ["Kamalnath Sharma", "Shanti Kumar Saha"],
  ["Shanti Kumar Saha", "Bhaskar"],
];

const settingData = (pair) => {
  let friend1 = pair[0];
  let friend2 = pair[1];
  if (!listOfPeople.entityRelations.hasOwnProperty(friend1)) {
    listOfPeople.entityRelations[friend1] = [friend2];
  } else {
    listOfPeople.entityRelations[friend1].push(friend2);
  }
  if (!listOfPeople.entityRelations.hasOwnProperty(friend2)) {
    listOfPeople.entityRelations[friend2] = [friend1];
  } else {
    listOfPeople.entityRelations[friend2].push(friend1);
  }
  for (let y of pair) {
    if (!listOfPeople.nodes.some((obj) => obj.value === y)) {
      listOfPeople.nodes.push({ label: y, value: y });
    }
  }
};

for (let x of initialInput) {
  settingData(x);
}

export { listOfPeople, initialInput, settingData };
