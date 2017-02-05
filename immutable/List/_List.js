/*
  List prototype
*/

const _List = {
  get head() {},
  get tail() {},
  get isEmpty() {},
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
    while (!self.isEmpty && !self.tail.isEmpty) {
      self = self.tail
    }
    return self.head
  },
  get reverse() {
    return this
  },
  append(xs) {
    return xs
  },

  drop(n) {
    let self = this
    while (!self.isEmpty && n > 0) {
      self = self.tail
      n--
    }
    return self
  },
  dropRight(n) {
    return this
  },
  take(n) {
    return this
  },
  takeRight(n) {
    return this
  },
  grouped(size) {
    return this
  },
  splitAt(index) {
    return this
  },
  slice(from, until) {
    return this
  },
  contains(elem) {
    let self = this, exist = false
    while (!self.isEmpty) {
      if (self.head === elem) {
        exist = true
        break
      }
    }
    return exist
  },
  indexOf(elem, from = 0) {
    let index = -1, i = 0, self = this
    while (!self.isEmpty && i < from) {
      i++
      self = self.tail
    }
    while (!self.isEmpty) {
      if (self.head === elem) {
        index = i
        break
      }
      i++
      self = self.tail
    }
    return index
  },
  lastIndexOf(elem, end) {
    let index = -1, i = 0, self = this
    while (!self.isEmpty && i < end) {
      if (self.head === elem) {
        index = i
      }
      i++
      self = self.tail
    }
    return index
  },
  // zip() {},

  map(fn) {
    return this
  },
  // flatMap(fn) {},
  foreach(fn) {
    let self = this
    while (!self.isEmpty) {
      fn(self.head)
      self = self.tail
    }
  },

  filter(p) {
    return this
  },
  partition(p) {
    return this
  },
  takeWhile(p) {
    return this
  },
  dropWhile(p) {
    return this
  },
  span(p) {
    return this
  },

  find(p) {
    let res = undefined, self = this
    while (!self.isEmpty) {
      if (p(self.head)) {
        res = self.head
        break
      }
      self = self.tail
    }
    return res
  },
  forall(p) {
    let res = true, self = this
    while (!self.isEmpty) {
      if (!p(self.head)) {
        res = false
        break
      }
      self = self.tail
    }
    return res
  },
  exists(p) {
    let res = false, self = this
    while (!self.isEmpty) {
      if (p(self.head)) {
        res = true
        break
      }
      self = self.tail
    }
    return res
  },
  count(p) {
    let cnt = 0, self = this
    while (!self.isEmpty) {
      if (p(self.head)) {
        cnt++
      }
      self = self.tail
    }
    return res
  },
  indexWhere(p, from) {
    let index = -1, i = 0, self = this
    while (!self.isEmpty && i < from) {
      i++
      self = self.tail
    }
    while (!self.isEmpty) {
      if (p(self.head)) {
        index = i
        break
      }
      i++
      self = self.tail
    }
    return index
  },
  lastIndexWhere(p, end) {
    let index = -1, i = 0, self = this
    while (!self.isEmpty && i < end) {
      if (self.head === elem) {
        index = i
      }
      i++
      self = self.tail
    }
    return index
  },

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

export {
  _List
}
