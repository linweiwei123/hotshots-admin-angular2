/**
 * Created by Administrator on 2016/11/24.
 */
//当前文件所在路径
var path = require('path');

// Helper functions
//获取上级文件目录，相当于cd ../, 同级src就是 ../src
var ROOT = path.resolve(__dirname, '..');

function isWebpackDevServer() {
    //exec是用于检索某个字符串，此方法用来检测是否是webpack-dev-server
    return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

//此方法用于改变根路径
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;