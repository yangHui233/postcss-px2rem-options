'use strict';

var postcss = require('postcss');
var Px2rem = require('px2rem');

function cssTransfrom(css,options,result){
  var oldCssText = css.toString();
  var px2remIns = new Px2rem(options);
  var newCssText = px2remIns.generateRem(oldCssText);
  result.root = postcss.parse(newCssText) 
}

module.exports = postcss.plugin('postcss-px2rem-options', function (options) {

  return function (css, result) {

    if(Object.prototype.toString.call(options)==='[object Array]'){
        // 数组
        let includeArr = [];

        for(let i = 0;i<options.length;i++){

          // 获取include文件，组合成数组
          options[i].include && includeArr.push(options[i].include)

          // include文件处理
          if (options[i].include && css.source.input.file.match(options[i].include) !== null) { 

                cssTransfrom(css,options[i],result)
          }

        }
        // 判断是否不存在于以上文件内，则原css返回
        var flag = includeArr.every((item, i) => css.source.input.file.match(item)===null )
        if(flag){
          result.root = css;
        }

    }else{
        // 传入对象

        
        if (options.include && css.source.input.file.match(options.include) !== null) {
            // 处理include文件夹下的文件
            cssTransfrom(css,options,result)

        }else{
          // 处理非include文件夹下的文件，原css返回
            result.root = css;
        }

        
        if (options.exclude && css.source.input.file.match(options.exclude) !== null) {
              // 处理非exclude文件夹下的文件
              result.root = css;
        }else{
              // 处理exclude文件夹下的文件，原css返回
              cssTransfrom(css,options,result)          
        }

    }

  }
});
