# postcss-px2rem-include

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the include/exclude folder option.


## Useage

### .postcssrc.js
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
