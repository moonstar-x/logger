# Logger

This is a small logging module that helps a more organized message logging. You can color up the logging messages and add a timestamp.

## Usage

### Install

    npm install moonstar-x/logger

### Creating an instance

``` js
const { Logger } = require('logger');
const logger = new Logger({
  colors: true,
  timestamps: true
});
```

You can enable and disable colors and timestamps if you don't wish to use them.

### Logging Messages

You can log multiple types of messages:

#### INFO

``` js
logger.info("message to log");
```

#### WARN

``` js
logger.warn("message to log");
```

#### ERROR

``` js
logger.error("message to log");
```

#### DEBUG

``` js
logger.debug("message to log");
```

## Author

This module was made by [moonstar-x](https://github.com/moonstar-x).