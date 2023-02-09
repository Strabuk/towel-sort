
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  return arr.reduce((acc, cur, i) => {
    return acc.concat((!(i % 2) ? cur : cur.reverse()));
  }, []);
}
