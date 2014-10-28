SCSS Library
============

Bigcommerce SCSS Framework

Built based on the Bigcommerce [SASS Style Guide](https://github.com/bigcommerce-labs/sass-style-guide).

# Get started
First mke sure you have Bower and Grunt installed globally on your machine:
```
npm install -g grunt-cli && npm install -g bower
```

Check out the code and run:

```
bundle install && npm install && bower install
```

## Development
To have continuous code linting while you work and have the Sass files update
in your working copy of the BCApp Pattern-Lab, first you should `bower link`
[more details here](http://bower.io/docs/api/#link)
the sass-library into the Pattern-Lab:

```bash
~/sass-library $ bower link
```

```bash
~/bcapp-pattern-lab $ bower link sass-library
```

Now with your symlinked package, just:

```
grunt run
```

Or you could just run `grunt build` to not watch the `.scss` files.

## Linting
To adhere to the Bigcommerce [SASS Style Guide](https://github.com/bigcommerce-labs/sass-style-guide)
we have included the use of scss-lint to help you along as a grunt task.

```
grunt scsslint
```

## Releasing
Run `grunt release` to build, tag and release a new version of the Library.
