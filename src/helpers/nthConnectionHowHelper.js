import { listOfPeople } from "../data/listOfPeople";

export default function nthConnectionHow(friend1, friend2) {
  let result = [];
  function nthConnectionHowInner(
    friend1,
    friend2,
    path = [friend1],
    visited = {}
  ) {
    if (visited[friend1]) return;
    visited[friend1] = true;
    if (listOfPeople.entityRelations[friend1] instanceof Array) {
      for (let friend of listOfPeople.entityRelations[friend1]) {
        if (friend === friend2) {
          result.push(path.concat(friend2));
        } else {
          nthConnectionHowInner(friend, friend2, path.concat(friend), visited);
        }
      }
    }
  }
  nthConnectionHowInner(friend1, friend2);
  return result;
}
