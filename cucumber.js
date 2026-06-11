module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'tests/steps/**/*.ts',
      'tests/hooks/**/*.ts',
      'tests/support/**/*.ts'
    ],
    paths: ['tests/features/**/*.feature'],
    format: [
      'progress'
    ],
    parallel: 1,
    publishQuiet: true,
    timeout: 30000
  }
};
