const options = [
    '--require-module ts-node/register', // Load TypeScript module
    '--format progress', // Load custom formatter
    '--retry 2', // Retry once if there are failures
  ].join(' ');
  
  const runApi = [
    'src/objetives/**/*.feature', // Specify our feature files
    '--require src/tests/**/*.ts', // Load step definitions
    options,
  ].join(' ');

  module.exports = {
    test_api: runApi,
  };