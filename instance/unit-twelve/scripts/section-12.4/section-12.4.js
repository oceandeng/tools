requirejs.config({
    baseUrl: './scripts/section-12.4/lib',
    paths: {
        app: '../app',
        jquery: '../../../../bower_components/jquery/dist/jquery.min'
    },
    shim: {
        two: {
            exports: 'two'
        }
    }
})

requirejs(['app/main'])
