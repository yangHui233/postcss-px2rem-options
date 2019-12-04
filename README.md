# postcss-px2rem-include

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the include/exclude folder option.


## Useage

<!-- 以下两种配置方法取其一 -->

### 1、webpack.config.js
```javascript
/**
  * 1.数组仅支持include        [{
                                remUnit: 75, include: /src|folder_name/i,
                              },{
                                remUnit: 75/2.2, include: /node_modules|folder_name/i
                              }]

 * 2.对象支持include和exclude  {
                                remUnit: 75/2.2, include: /node_modules|folder_name/i
                              }
                              或
                              {
                                remUnit: 75/2.2, exclude: /node_modules|folder_name/i
                              }

 * 
*/
const px2rem = require('postcss-px2rem-options');

{
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            ...
            px2rem([{
              remUnit: 75, include: /src|folder_name/i,
            },{
              remUnit: 75/2.2, include: /node_modules|folder_name/i
            }]),
            ...
          ],
        },
}
```

### 2、.postcssrc.js

```javascript
/**
 * 1.数组仅支持include
 * 2.对象支持include和exclude
 * 
*/

// 对象include模式
module.exports = {
  'plugins': {
    'postcss-px2rem-options': {
      remUnit: 75,
      include: /node_modules|folder_name/i
    }
  }
}
// 对象exclude模式
module.exports = {
  'plugins': {
    'postcss-px2rem-options': {
      remUnit: 75,
      include: /node_modules|folder_name/i
    }
  }
}

// 数组模式

module.exports = {
  'plugins': {
    'postcss-px2rem-options': [
      {
        remUnit: 37.5,
        include: /node_modules|folder_name/i
      },{
        remUnit: 75,
        include: /src|folder_name/i
      }
    ]
  }
}
```
