module.exports = function(grunt) {
// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		responsive_images: {
			dev: {
				options: {
					engine: 'gm',
					sizes: [{
					width: '100%',     
					/*suffix: ,*/   
					quality: 40,     
					rename: false
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_src/',
					dest: 'done/'
				}]
			}
    	},

		uglify: {
			options: {
				manage: false,  
				/* preserveComments: 'all', */
				banner: '/* Updated <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'js/animations.js',
					'js/content.js',
					'js/preload.js',
					'js/main.js'
				],
				dest: 'js/app.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					/* style: 'compressed' */
				},
				files: {
					'css/style.css' : 'css/style.scss',
				}
			}
		},

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',	
					src: ['*.css', '!*.min.css'], 
					dest: 'css/',  
					ext: '.min.css' 
				}]
			}
		}, 

		watch: {
			sass: {
				// If anything in these files changes, run the tasks
				files: ['css/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-responsive-images');

	grunt.registerTask('default', ['watch']);
};