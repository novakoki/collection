import { _List } from "./_List"
import { Nil } from "./Nil"

/*
 Nonempty List
*/

const _Cons = Object.create(_List)

Object.defineProperties(_Cons, {
  isEmpty: {
    get() {
      return false
    }
  },
  head: {
    get() {
      return this.hd
    }
  },
  tail: {
    get() {
      return this.tl
    }
  }
})

const Cons = function(hd, tl) {
  if (tl === Nil || _Cons.isPrototypeOf(tl)) {
    const _cons = Object.create(_Cons)
    _cons.hd = hd
    _cons.tl = tl
    Object.defineProperty(_cons, "hd", {
      writable: false
    })
    return _cons
  } else {
    throw "tail should be a List"
  }
}

export {
  _Cons,
  Cons
}
