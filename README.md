# Logger

This is a small logging module that helps a more organized message logging. You can color up the logging messages and add a timestamp.

## Usage

### Creating an instance

    const { Logger } = require('logger');
    const logger = new Logger({
      colors: true,
      timestamps: true
    });

You can enable and disable colors and timestamps if you don't wish to use them.

### Logging Messages

You can log multiple types of languages:

#### INFO

    logger.info("message to log");

#### WARN

    logger.warn("message to log");

#### ERROR

    logger.error("message to log")

#### DEBUG

    logger.debug("message to log");

## Author

This module was made by [moonstar-x](https://github.com/moonstar-x).