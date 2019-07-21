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
  timestamps: true,
  trace: true
});
```

If you omit the options object in the object constructor, the Logger will be initialized with these settings as default. You can enable and disable colors, timestamps and error stack trace if you don't wish to use them.

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

### Clear Console

You can clear the console with:

``` js
logger.clear();
```

## Author

This module was made by [moonstar-x](https://github.com/moonstar-x).
