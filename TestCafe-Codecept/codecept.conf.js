const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'edge',
      show: true,
      waitForTimeout: 15000,
      keepCookies: true,
      windowSize: '800*600',
    },
    CustomCommands: {
      require: './customcommands_helper.js',
    },
  },
  include: {
    I: './steps_file.js',

    loginPage: './pages/LoginPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'TestCafe-Codecept',
  pligins: {
    pauseOnFail: {
      retryFailedStep: {
        enabled: false,
      },
    },
    tryTo: {
      enabled: false,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
}
