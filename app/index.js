'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var spawn = require('child_process').spawn;

var AngularComponentGenerator = module.exports = function AngularComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });

    this.invoke('karma:app', {
      options: {
        coffee: true,
        travis: true,
        'skip-install': this.options['skip-install'],
        components: [
          'angular/angular.js',
          'angular-resource/angular-resource.js',
          'angular-cookies/angular-cookies.js',
          'angular-sanitize/angular-sanitize.js',
          'angular-route/angular-route.js',
          'angular-mocks/angular-mocks.js'
        ]
      }
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularComponentGenerator, yeoman.generators.Base);

AngularComponentGenerator.prototype.askForType = function askForType() {
  var cb = this.async();

  this.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is the name of your component?'
  },{
    type: 'list',
    name: 'type',
    message: 'What type of component would you like to create?',
    choices: ['directive'],
    default: 'directive'
  }], function (props) {
    this.env.options.name = props.name;
    this.env.options.type = props.type;

    cb();
  }.bind(this));
};

AngularComponentGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
};

AngularComponentGenerator.prototype.test = function test() {
  this.mkdir('test');
  this.mkdir('test/spec');
};

AngularComponentGenerator.prototype.component = function component() {
  if (this.env.options.type === 'directive') {
    this.copy('scripts/directive.coffee', 'app/scripts/' + this.env.options.name + '.coffee');
    this.copy('test/directive.coffee',    'test/spec/' + this.env.options.name + '.coffee');
  }
};

AngularComponentGenerator.prototype.packageFiles = function packageFiles() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');
};

AngularComponentGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('test/jshintrc', 'test/.jshintrc');
};