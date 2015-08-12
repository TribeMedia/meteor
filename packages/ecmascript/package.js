Package.describe({
  name: 'ecmascript',
  version: '0.1.3-rc.0',
  summary: 'Compiler plugin that supports ES2015+ in all .js files',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'compile-ecmascript',
  use: ['babel-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.imply('babel-runtime');
  api.imply('promise');
  api.imply('ecmascript-collections');
});

Package.onTest(function (api) {
  api.use(["tinytest", "underscore"]);
  api.use(["ecmascript", "babel-compiler"]);
  api.addFiles("runtime-tests.js");
  api.addFiles("transpilation-tests.js", "server");
});
