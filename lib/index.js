var _    = require('lodash'),
    fs   = require('fs'),
    path = require('path');

// Constants
const __BASEDIR = process.cwd();
const __JSPMDIR = path.resolve(__BASEDIR, 'jspm_packages'); // TODO: Allow for alternative directories

// Da function
module.exports = function(pkg) {
  if (pkg.split('@')[1]) {
    return path.join(__JSPMDIR, pkg.replace(':', '/'));
  } else {
    var semver    = [],
        pkg_name  = _.last(pkg.split('/')),
        pkg_root  = path.join(__JSPMDIR, pkg.split(':')[0], pkg.split(':')[1].split('/')[0]),
        pkg_path  = path.join(pkg_root, pkg_name),
        dir_names = fs.readdirSync(pkg_root);

    _(dir_names).forEach(function(dir) {
      var stat_path = path.join(pkg_root, dir),
          stat_info = fs.lstatSync(stat_path);

      if (stat_info.isDirectory() && dir[0] !== '.') {
        var c_ver  = stat_path.split('@')[1],
            c_name = _.last(stat_path.split('@')[0].split('/'));

        if (c_name == pkg_name) {
          semver.push(c_ver);
        }
      }
    }).value();

    return pkg_path + '@' + _.last(_.sortBy(semver));
  }
};
