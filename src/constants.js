const colors = {
  BLACK: '\x1b[30m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m',
  WHITE: '\x1b[37m'
}

const backgrounds = {
  BLACK: '\x1b[40m',
  RED: '\x1b[41m',
  GREE: '\x1b[42m',
  YELLOW: '\x1b[43m',
  BLUE: '\x1b[44m',
  MAGENTA: '\x1b[45m',
  CYAN: '\x1b[46m',
  WHITE: '\x1b[47m'
}

const reset = '\x1b[0m';

const msgTypes = {
  info: {
    type: 'INFO',
    color: colors.CYAN
  },
  warn: {
    type: 'WARN',
    color: colors.YELLOW
  },
  error: {
    type: 'ERROR',
    color: colors.RED
  },
  debug: {
    type: 'DEBUG',
    color: colors.GREEN
  }
}

module.exports = {
  colors,
  backgrounds,
  reset,
  msgTypes,
}