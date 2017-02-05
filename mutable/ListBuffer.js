import { Cons } from "../immutable/List/_Cons"
import { Nil } from "../immutable/List/Nil"

const _ListBuffer = {
  start: Nil,
  last0: null,
  exported: false,
  copy() {},
  push(x) {
    if (this.exported) {
      this.copy()
    }
    if (this.start.isEmpty) {
      this.last0 = Cons(x, Nil)
      this.start = this.last0
    } else {
      const last1 = this.last0
      this.last0 = Cons(x, Nil)
      last1.tl = this.last0
    }
  },
  toList() {
    this.exported = !this.start.isEmpty
    return this.start
  }
}

const ListBuffer = function(...args) {
  const _lb = Object.create(_ListBuffer)
  for (let i = 0; i < args.length; i++) {
    _lb.push(args[i])
  }
  return _lb
}

export {
  ListBuffer
}
