# generator-angulator [![Build Status](https://secure.travis-ci.org/azzamallow/generator-angulator.png?branch=master)](https://travis-ci.org/azzamallow/generator-angulator)

A [Yeoman](http://yeoman.io) Generator for creating a testable AngularJS component, such as a directive or a service, and publishing it to bower.

All components and tests are written in CoffeeScript.

## Getting Started

Install yeoman and bower if you have not already.

```
$ npm install -g yo bower
```

### The Generator

To install generator-angulator from npm, run:

```
$ npm install -g generator-angulator
```

### Let's make a component!

Create a directory and cd into it:

```
$ mkdir <component_name> && cd $_
```

Initiate the generator:

```
$ yo angulator
```

You will be asked to name the generator and select the type of component you would like to create:

```
❯ directive
  factory
  filter
  service
```

Once your project has been generated, you can build and test your component with ease:

```
$ grunt test
```

Publish your component to bower and share it with the world:

```
$ bower register <component_name> https://github.com/<author>/<component_name>
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
