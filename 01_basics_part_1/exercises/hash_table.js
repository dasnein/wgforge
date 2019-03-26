/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}
 
function isString(value) {
  const type = typeof value
  return type == 'string' || (type == 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]')
}
 
export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    if (isString(key)) {
      const value = +key.split('').map(v => v.charCodeAt()).join('');
      this.memory[this.memory.length] = [key, value];
    } else {
      throw Error('Key is not a String!');
    }
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    let value;

    this.memory.forEach(v => {
      if (v[0] === key) {
        value = v[1];
      }
    });

    return value;
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    if (isString(key)) {
      this.memory[this.memory.length] = [key, value];
    } else {
      throw Error('Key is not a String!');
    }
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    if (isString(key)) {
      let value;

      this.memory.forEach((v, i, arr) => {
        if (value) {
          arr[i - 1] = arr[i];
        } else if (v[0] === key) {
          value = v[1];
        }
      });

      if (value) {
        this.memory.length = this.memory.length - 1;
      }

      return value;
    } else {
      throw Error('Key is not a String!');
    }
  }
}
