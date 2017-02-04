import { ListBuffer } from '../mutable/ListBuffer'

// List prototype

const _List = {
  get length() {
    let len = 0, self = this
    while (!self.isEmpty) {
      self = self.tail
      len++
    }
    return len
  },
  get init() {},
  get last() {
    let self = this
    while (!self.tail.isEmpty) {
      self = self.tail
    }
    return self.head
  },
  get reverse() {},

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
  foreach(fn) {
    let self = this
    while (!self.isEmpty) {
      fn(self.head)
      self = self.tail
    }
  },

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

  toString() {},
  toArray() {},
  mkString(pre, sep, post) {}
}

// Empty List

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
Object.freeze(Nil)

// Nonempty List

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
Object.freeze(_Cons)

// Factory Methods

const Cons = function(hd, tl) {
  if (tl === Nil || _Cons.isPrototypeOf(tl)) {
    const _cons = Object.create(_Cons)
    _cons.hd = hd
    _cons.tl = tl
    Object.freeze(_cons)
    return _cons
  } else {
    throw "tail should be a List"
  }
}

const List = function(...args) {
  let _list = Nil
  for (let i = args.length - 1; i >= 0; i--) {
    _list = Cons(args[i], _list)
  }
  return _list
}

List.range = function(from, until, step = 1) {
  let _list = Nil
  for (let i = until; i >= from; i -= step) {
    _list = Cons(i, _List)
  }
  return _list
}

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
