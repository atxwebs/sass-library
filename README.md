SCSS Library
============

Bigcommerce SCSS Framework &amp; Pattern Library

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
To have continuous code linting while you work, just:

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
