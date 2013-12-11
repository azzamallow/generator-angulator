'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AngularComponentGenerator = module.exports = function AngularComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularComponentGenerator, yeoman.generators.Base);

AngularComponentGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.copy('scripts/directive.coffee', 'app/scripts/directive.coffee');
};

AngularComponentGenerator.prototype.test = function test() {
  this.mkdir('test');
  this.mkdir('test/spec');
  this.copy('test/directive.coffee', 'test/spec/directive.coffee');
};

AngularComponentGenerator.prototype.packageFiles = function packageFiles() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};

AngularComponentGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};