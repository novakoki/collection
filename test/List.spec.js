import { List, Nil } from "../immutable/List"

describe("Nil", function() {
  describe("isEmpty", function() {
    it("returns true", function() {
      expect(Nil.isEmpty).to.equal(true)
    })
  })
})

describe("List", function() {
  describe("List", function() {
    it("accepts a sequence of arguments and returns a list", function() {
        const _list = List(1, 2, 3)
        const _array = [1, 2, 3]
        let index = 0
        _list.foreach(function(item) {
          expect(item).to.equal(_array[index++])
        })
        expect(index).to.equal(_array.length)
    })

    it("returns Nil without arguments", function() {
      expect(List()).to.equal(Nil)
    })
  })

  describe("#range", function() {
    it("produces a number list in [from, until)", function() {
      const _list = List.range(1, 5)
      const _array = [1, 2, 3, 4]
      let index = 0
      _list.foreach(function(item) {
        expect(item).to.equal(_array[index++])
      })
      expect(index).to.equal(_array.length)
    })

    it("produces with an optional step", function() {
      const _list = List.range(1, 5, 2)
      const _array = [1, 3]
      let index = 0
      _list.foreach(function(item) {
        expect(item).to.equal(_array[index++])
      })
      expect(index).to.equal(_array.length)
    })
  })

  describe("#make", function() {
    it("produces a list of n duplicated items", function() {
      const _list = List.make(5, "a")
      _list.foreach(function(item) {
        expect(item).to.equal("a")
      })
    })
  })

  describe("#concat", function() {
    it("concat a sequence of list in order", function() {
      const _list = List.concat(List(1, 2), List(3, 4), List(5, 6))
      const _array = [1, 2, 3, 4, 5, 6]
      let index = 0
      _list.foreach(function(item) {
        expect(item).to.equal(_array[index++])
      })
      expect(index).to.equal(_array.length)
    })
  })
})

describe("_List", function() {
  describe("length", function() {
    it("returns the length of list", function() {
      expect(List(1, 2, 3).length).to.equal(3)
      expect(List(1).length).to.equal(1)
      expect(Nil.length).to.equal(0)
    })
  })

  describe("reverse", function() {
    it("returns the reverse list", function() {
      const _list = List(1, 2, 3)
      const _rev = _list.reverse
      const _array = [3, 2, 1]
      let index = 0
      _list.foreach(function(item) {
        expect(item).to.equal(_array[index++])
      })
      expect(index).to.equal(_array.length)
    })
  })

  describe("#map", function() {
    it("apply fn to every element and return a new list", function() {
      const _map = List(1, 2, 3).map(function(item) {
        return item * 2
      })
      const _array = [2, 4, 6]
      let index = 0
      _map.foreach(function(item) {
        expect(item).to.equal(_array[index++])
      })
      expect(index).to.equal(_array.length)
    })
  })

  describe("#drop", function() {
    const _list = List(1, 2, 3)

    it("returns a new list which drops first n elements", function() {
      const _droped = _list.drop(1)
      expect(_droped).to.not.equal(_list)
      expect(_droped.head).to.equal(2)
      expect(_droped.tail.head).to.equal(3)
    })

    it("returns Nil when n >= length", function() {
      expect(_list.drop(3)).to.equal(Nil)
      expect(_list.drop(4)).to.equal(Nil)
    })

    it("returns original list when n <= 0", function() {
      expect(_list.drop(0)).to.equal(_list)
      expect(_list.drop(-1)).to.equal(_list)
    })
  })
})
