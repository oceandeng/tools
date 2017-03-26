define(['./two'], function(two){
    return {
        hi: function(){
            two.hi('world')
            console.log('hello from three' )
        }
    }
})
