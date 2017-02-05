import { _Cons, Cons } from "./_Cons"
import { Nil } from "./Nil"
import { ListBuffer } from "../../mutable/ListBuffer"

_Cons.map = function(fn) {
    const _lb = ListBuffer()
    let self = this
    while (!self.isEmpty) {
      _lb.push(fn(self.head))
      self = self.tail
    }
    return _lb.toList()
}

/*
  List factory methods
*/

const List = function(...args) {
  let _list = Nil
  for (let i = args.length - 1; i >= 0; i--) {
    _list = Cons(args[i], _list)
  }
  return _list
}

List.range = function(from, until, step = 1) {}

List.make = function(n, item) {
  let _list = Nil
  while (n--) {
    _list = Cons(item, _list)
  }
  return _list
}

List.concat = function(...args) {}

export {
  List,
  Cons,
  Nil
}
