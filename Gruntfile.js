// Generated on 2014-02-11 using generator-senchatouch 0.0.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
//
var exec = require('child_process').exec;

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            testing: 'build/testing/imagegridlist',
            production: 'build/production/imagegridlist',
            bowerDist: 'bower-dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            jstest: {
                files: ['test/spec/{,**/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= yeoman.app %>/resources/sass/{,**/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.app %>/resources/css/{,**/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '.tmp/resources/css/{,**/}*.css',
                    '{.tmp,<%= yeoman.app %>}/app/{,**/}*.js',
                    '{.tmp,<%= yeoman.app %>}/app/app.js',
                    '<%= yeoman.app %>/resources/images/{,**/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            testing: {
                options: {
                    open: true,
                    hostname: 'localhost',
                    base: [
                        '<%= yeoman.testing %>'
                    ]
                }
            },
            production: {
                options: {
                    open: true,
                    hostname: 'localhost',
                    base: [
                        '<%= yeoman.production %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'app/ux/touch/ImageGridList/model/Image.js',
                'app/ux/touch/ImageGridList/view/*.js',
                'test/spec/{,**/}*.js'
            ]
        },


        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },

        karma: {
            unit: {
                options: {
                    frameworks: ['mocha', 'expect', 'sinon'],
                    runnerPort: 8080,
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'app/touch/sencha-touch-all-debug.js',
                        'app/ux/touch/ImageGridList/model/Image.js',
                        'app/ux/touch/ImageGridList/view/*.js',
                        'app/app.js',
                        'test/spec/**/*.js'
                    ]
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            server: {
                options: {
                    sassDir: '<%= yeoman.app %>/resources/sass',
                    cssDir: '.tmp/resources/css',
                    generatedImagesDir: '.tmp/resources/images/generated',
                    imagesDir: '<%= yeoman.app %>/resources/images',
                    javascriptsDir: '<%= yeoman.app %>/app',
                    fontsDir: '<%= yeoman.app %>/resources/sass/stylesheets/fonts',
                    //importPath: '<%= yeoman.app %>/bower_components',
                    httpImagesPath: '/resources/images',
                    httpGeneratedImagesPath: '/resources/images/generated',
                    httpFontsPath: '/resources/fonts',
                    load: '<%= yeoman.app %>/touch/resources/themes',
                    relativeAssets: false,
                    assetCacheBuster: false,
                    debugInfo: true
                }
            }
        },

        // Automatically inject Bower components into the HTML file
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            production: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/resources/images',
                    src: '{,**/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.production %>/resources/images'
                }]
            }
        },
        svgmin: {
            production: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/resources/images',
                    src: '{,**/}*.svg',
                    dest: '<%= yeoman.production %>/resources/images'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //     dist: {
        //         files: {
        //             '<%= yeoman.dist %>/styles/main.css': [
        //                 '.tmp/styles/{,*/}*.css',
        //                 '<%= yeoman.app %>/styles/{,*/}*.css'
        //             ]
        //         }
        //     }
        // },
        // uglify: {
        //     dist: {
        //         files: {
        //             '<%= yeoman.dist %>/scripts/scripts.js': [
        //                 '<%= yeoman.dist %>/scripts/scripts.js'
        //             ]
        //         }
        //     }
        // },
        // concat: {
        //     dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/resources/css',
                dest: '.tmp/resources/css/',
                src: '{,**/}*.css'
            },
            bower: {
                expand: true,
                dot: false,
                cwd: '<%= yeoman.app %>/',
                dest: '<%= yeoman.bowerDist %>/',
                src: [
                    'resources/images/checked.png',
                    'resources/sass/_image-grid-list.scss',
                    'ux/**/*.js'
                ]
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'compass:server',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ]
        }
    });

    grunt.registerTask('senchaBuild', function(target) {
        var done = this.async(),
            senchaCmd;

        senchaCmd = exec('sencha app build ' + target, {
            cwd: 'app'
        });

        senchaCmd.stderr.on('data', function(message) {
            grunt.log.write(message);
        });

        senchaCmd.stdout.on('data', function(message) {
            grunt.log.write(message);
        });

        senchaCmd.on('exit', function(code) {
            grunt.log.write('sencha app build end.');
            return code === 0 ? done() : done(false);
        });
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build:' + target, 'connect:' + target + ':keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', ['newer:jshint', 'karma']);

    grunt.registerTask('build', function(target) {
        if(target === 'testing') {
            grunt.task.run([
                'senchaBuild:testing'
            ]);
        }else if(target === 'production') {
            grunt.task.run([
                'senchaBuild:production',
                'imagemin:production',
                'svgmin:production',
            ]);
        }
    });

    grunt.registerTask('build-bower', [
        'copy:bower'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'serve'
    ]);
};
