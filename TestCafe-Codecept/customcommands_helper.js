const Helper = require('@codeceptjs/helper')

class CustomCommands extends Helper {
  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  slowTest(speed) {
    const { t } = this.helpers['TestCafe']
    return t.setTestSpeed(speed)
  }
}

module.exports = CustomCommands
