# generator-angulator [![Build Status](https://secure.travis-ci.org/azzamallow/generator-angulator.png?branch=master)](https://travis-ci.org/azzamallow/generator-angulator)

A [Yeoman](http://yeoman.io) Generator for creating testable AngularJS components, such as a directive or a service. 

You can only generate a directive or a filter at this point. I am happy to accept pull requests to generate new components, however I am adding new components as I need them.

All components and tests are written in CoffeeScript.

## Getting Started

Install yeoman if you have not already.

```
$ npm install -g yo
```

### The Generator

To install generator-angulator from npm, run:

```
$ npm install -g generator-angulator
```

### Let's make a component!

Create a directory and cd into it

```
$ mkdir myDirective && cd $_
```

Initiate the generator:

```
$ yo angulator
```

You will be asked some questions, answer and let the generator do the rest! 

Once your project has been generated, you can build and test your component with easy

```
$ grunt test
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
