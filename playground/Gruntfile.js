// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt 
    grunt.initConfig({
        // LESS
        less: {
            dev: {
                options: {
                    cleancss: true,
                    compress: true
                },
                files: {
                    "./public/assets/css/frontend.css": ["./app/src/stylesheets/frontend.less", './bower_components/animate.css/animate.min.css']
                }
            }
        },
        // css: {
        //     src: ['./bower_components/animate.css/animate.min.css'],
        //     dest: './public/assets/css/animate.css'
        // },
        // Concat the JS
        concat: {
            options: {
                separator: ';'
            },
            js_frontend: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './app/src/javascript/jquery.easing.1.3.js',
                    './bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js',
                    './bower_components/classie/classie.js',
                    './bower_components/wow/dist/wow.js',
                    './app/src/javascript/frontend.js'
                ],
                dest: './public/assets/javascript/frontend.js',
            }
        },
        // Uglify JS for dist
        uglify: {
            dist: {
                files: {
                    './public/assets/javascript/frontend.js': ['./public/assets/javascript/frontend.js']
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
                files: 'index.html',
                options: {
                    livereload: true
                }
            },
            js_frontend: {
                files: [
                    //watched files
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js',
                    './app/src/javascript/frontend.js'
                ],
                tasks: ['concat:js_frontend'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            },
            less: {
                files: ['./app/src/stylesheets/*.less'], //watched files
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
    // grunt.loadNpmTasks('grunt-contrib-copy');

    // Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);
};
