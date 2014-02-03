module.exports = function( grunt ) {
 
  grunt.initConfig({

  	uglify : {
      options : {
        mangle : false
      },
 
      my_target : {
        files : {
          'dist/js/built.min.js' : [ 'dist/js/built.js' ]
        }
      }
    }, // uglify

    concat: {
	    options: {
	     
	    },
	    dist: {
	      src: ['src/assets/js/main.js', 'src/assets/js/grafico-pizza.js', 'src/assets/js/calculadora.js'],
	      dest: 'dist/js/built.js',
	    },
	  },

  cssmin: {
    combine: {
      files: {
        'dist/css/built.min.css': ['src/assets/css/calculadora.css', 'src/assets/css/grafico-pizza.css']
      },
       compress: {
        files: {
          'dist/css/built.min.css': ['dist/css/built.css']
        }
      }
    }
  }

  });

   // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 
 
  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'concat','uglify', 'cssmin' ] );
   grunt.registerTask( 'c', ['cssmin'] );

};