/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function smoosh(arr) {
  if (isArray(arr)) {
    let res = [];

    arr.forEach(v => {
      if (Array.isArray(v)) {
        res = res.concat(smoosh(v));
      } else {
        res.push(v);
      }
    });

    return res;
  }
}

function squeeze(arr) {
  if (isArray(arr)) {
    function smooshInSqueeze(smooshArr) {
      let res = [];

      smooshArr.forEach(v => {
        if (Array.isArray(v)) {
          res = res.concat(smooshInSqueeze(v));
        } else {
          res.push(v);
        }
      });

      return res;
    }

    arr.forEach((v, i) => {
      if (Array.isArray(v)) {
        arr.splice(i, 1, ...smooshInSqueeze(v));
      }
    });

    return arr;
  }
}

function isArray(arr) {
  if (arr instanceof Array) return true;

  throw new Error('argument should be an array');
}

export { smoosh, squeeze };
