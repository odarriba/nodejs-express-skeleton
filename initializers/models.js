// Auto load all the models in the /models folder
models = require('require-all')({
  dirname     :  __dirname + '/../models',
  filter      :  /(.+)\.js$/,
  excludeDirs :  /^\.(git|svn)$/,
  map         : function (name, path) {
    return name.replace(/_(.)/g, function(match) {
        return match.replace('_','').toUpperCase();
    });
  }
});
