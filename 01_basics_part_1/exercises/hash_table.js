/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

/*
*  functions isString() & getTag() are borrowed from lodash
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
  
  hashKey(key) {
    if (isString(key)) {
      let hash = 0;

      if (key.length > 0) {
        for (var i = 0; i < key.length; i++) {
          const char = key.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash;
        }
      }

      return hash;
    } else {
      throw Error('Key is not a String!');
    }
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    return this.memory[this.hashKey(key)];
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    this.memory[this.hashKey(key)] = value;
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    delete this.memory[this.hashKey(key)];
  }
}