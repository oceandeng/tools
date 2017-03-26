require(['./one', './two', './three'], function(one, two, three){
    one.hi()
    two.hi('world')
    three.hi()
    console.log('And that`s all')
})
