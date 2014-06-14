Package.describe({
  summary: 'User interface for the tap-i18n package'
});

Package.on_use(function (api) {
  api.use(['coffeescript','underscore','templating'], 'client');

  api.imply('tap-i18n', ['client', 'server']);

  api.add_files([
    'i18n_ui.html',
    'i18n_ui.coffee'
  ], 'client');
});