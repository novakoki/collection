import { _List } from "./_List"

/*
  Empty List
*/

const Nil = Object.create(_List)

Object.defineProperties(Nil, {
  isEmpty: {
    get() {
      return true
    }
  },
  head: {
    get() {
      throw "head of empty list"
    }
  },
  tail: {
    get() {
      throw "tail of empty list"
    }
  }
})

export {
  Nil
}
