// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt 
    grunt.initConfig({
        //Directories
        bowerDir: './bower_components',
        assetsDir: './public/assets',
        appDir: './src/app',

        // LESS
        less: {
            bootstrap: {
                options: {
                    ieCompact: true,
                    compress: true
                },
                files: {
                    "<%= assetsDir %>/css/frontend.css": ["<%= appDir %>/styles/frontend.less", '<%= bowerDir %>/animate.css/animate.min.css']
                }
            }
        },
        cssmin: {
            css: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    '<%= assetsDir %>/css/style.min.css': ['<%= assetsDir %>/css/frontend.css']

                }
            }
        },
        // Concat the JS
        concat: {
            options: {
                separator: ';'
            },
            js_frontend: {
                src: [
                    '<%= bowerDir %>/angular/angular.min.js',
                    '<%= bowerDir %>/angular-route/angular-route.min.js',
                    '<%= bowerDir %>/jquery/dist/jquery.js',
                    '<%= bowerDir %>/bootstrap/dist/js/bootstrap.js',
                    '<%= bowerDir %>/underscore/underscore.js',
                    '<%= appDir %>/js/jquery.easing.1.3.js',
                    // '<%= bowerDir %>/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js',
                    // '<%= bowerDir %>/classie/classie.js',
                    // '<%= bowerDir %>/wow/dist/wow.js',
                    // Angular Controllers
                    '<%= appDir %>/js/frontend.js',
                    
                    '<%= appDir %>/controllers/customersController.js',
                    '<%= appDir %>/controllers/customersControllerWithAs.js',
                    '<%= appDir %>/controllers/ordersController.js',
                    '<%= appDir %>/services/customersFactory.js'
                    

                ],
                dest: './public/assets/js/frontend.js',
            }
        },
        // Uglify JS for dist
        uglify: {
            options: {
                preserveComments: false
            },
            dist: {
                files: {
                    './public/assets/js/frontend.js': ['./public/assets/js/frontend.js']
                }
            }
        },
        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["public/"], // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },

        // grunt-watch will monitor the projects files
        watch: {
            all: {
                // Replace with whatever file you want to trigger the update from
                // Either as a String for a single entry 
                // or an Array of String for multiple entries
                // You can use globing patterns like `css/**/*.css`
                // See https://github.com/gruntjs/grunt-contrib-watch#files
                files: ['*.html'],
                options: {
                    livereload: true
                }
            },
            js_frontend: {
                files: [
                    //watched files
                    '<%= bowerDir %>/jquery/dist/jquery.js',
                    '<%= bowerDir %>/bootstrap/dist/js/bootstrap.js',
                    // '<%= bowerDir %>/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js',
                    '<%= appDir %>/js/frontend.js',
                    '<%= appDir %>/controllers/*.js',
                    '<%= appDir %>/services/*.js'

                ],
                tasks: ['concat:js_frontend'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
            less: {
                files: ['<%= appDir %>/styles/*.less'], //watched files
                tasks: ['less'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
        },

        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    // Plugin reloading - TEMP for now
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);
};
