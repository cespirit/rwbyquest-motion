module.exports = function(grunt) {
// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				manage: false,  
				/* preserveComments: 'all', */
				banner: '/* Updated <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'js/main.js'
				],
				dest: 'js/main.min.js'
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
			},
			uglify: {
				files: ['js/*main.js'],
				tasks: ['uglify']
			},
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