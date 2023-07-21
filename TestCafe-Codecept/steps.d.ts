/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type CustomCommands = import('./customcommands_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends TestCafe, CustomCommands {}
  interface I extends ReturnType<steps_file>, WithTranslation<CustomCommands> {}
  namespace Translation {
    interface Actions {}
  }
}
