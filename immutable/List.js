import { ListBuffer } from '../mutable/ListBuffer'

// List prototype

const _List = {
  get length() {},
  get init() {},
  get last() {},
  get reverse() {},
  get toString() {},
  get toArray() {},
  append(xs) {},
  drop(n) {},
  dropRight(n) {},
  take(n) {},
  takeRight(n) {},
  grouped(size) {},
  splitAt(index) {},
  slice(from, until) {},
  contains(elem) {},
  indexOf(elem, from) {},
  lastIndexOf(elem, end) {},
  // zip() {},

  map(fn) {},
  // flatMap(fn) {},
  foreach(fn) {},

  filter(p) {},
  partition(p) {},
  find(p) {},
  takeWhile(p) {},
  dropWhile(p) {},
  span(p) {},
  forall(p) {},
  exists(p) {},
  count(p) {},
  indexWhere(p, from) {},
  lastIndexWhere(p, end) {},

  foldLeft() {},
  foldRight() {},

  sort() {},
  max() {},
  min() {},
  sum() {},

  mkString(pre, sep, post) {}
}

// Empty List

const Nil = {
  get isEmpty() {
    return true
  },
  get head() {
    throw "head of empty list"
  },
  get tail() {
    throw "tail of empty list"
  }
}

Nil.prototype = Object.create(_List.prototype)
Object.freeze(Nil)

// Nonempty List

const _Cons = {
  get isEmpty() {
    return false
  },
  get head() {
    return this.hd;
  },
  get tail() {
    return this.tl;
  }
}

_Cons.prototype = Object.create(_List.prototype)

// Factory Methods

const Cons = function(hd, tl) {
  if (_List.isProtoTypeOf(tl)) {
    const _cons = Object.create(_Cons)
    _cons.hd = hd
    _cons.tl = tl
    Object.freeze(_cons)
    return _cons
  } else {
    throw "tail should be a List"
  }
}

const List = function(...args) {}

List.range = function(from, until, step) {}

List.make = function(n, item) {}

List.concat = function(...args) {}

export {
  List,
  Cons,
  Nil
}
