# @mario34/postcss-unit-transform [![NPM version](https://badge.fury.io/js/@mario34%2Fpostcss-unit-transform.svg)](https://badge.fury.io/js/@mario34/postcss-unit-transform)

> 在postcss-pxtorem的基础上新增了自定义单位 `unit` 选项

A plugin for [PostCSS](https://github.com/ai/postcss) that generates rem units from pixel units.

## Install

```shell
$ npm install postcss @mario34/postcss-unit-transform --save-dev
```

### options

Type: `Object | Null`  
Default:
```js
{
    rootValue: 16,
    unitPrecision: 5,
    propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
    exclude: /node_modules/i,
    unit: 'rem'
}
```

- `rootValue` (Number | Function) Represents the root element font size or returns the root element font size based on the [`input`](https://api.postcss.org/Input.html) parameter
- `unitPrecision` (Number) The decimal numbers to allow the REM units to grow to.
- `propList` (Array) The properties that can change from px to rem.
    - Values need to be exact matches.
    - Use wildcard `*` to enable all properties. Example: `['*']`
    - Use `*` at the start or end of a word. (`['*position*']` will match `background-position-y`)
    - Use `!` to not match a property. Example: `['*', '!letter-spacing']`
    - Combine the "not" prefix with the other prefixes. Example: `['*', '!font*']`
- `selectorBlackList` (Array) The selectors to ignore and leave as px.
    - If value is string, it checks to see if selector contains the string.
        - `['body']` will match `.body-class`
    - If value is regexp, it checks to see if the selector matches the regexp.
        - `[/^body$/]` will match `body` but not `.body`
- `replace` (Boolean) Replaces rules containing rems instead of adding fallbacks.
- `mediaQuery` (Boolean) Allow px to be converted in media queries.
- `minPixelValue` (Number) Set the minimum pixel value to replace.
- `exclude` (String, Regexp, Function) The file path to ignore and leave as px.
    - If value is string, it checks to see if file path contains the string.
        - `'exclude'` will match `\project\postcss-pxtorem\exclude\path`
    - If value is regexp, it checks to see if file path matches the regexp.
        - `/exclude/i` will match `\project\postcss-pxtorem\exclude\path`
    - If value is function, you can use exclude function to return a true and the file will be ignored.
        - the callback will pass the file path as  a parameter, it should returns a Boolean result.
        - `function (file) { return file.indexOf('exclude') !== -1; }`
- `unit` (String) 任意的单位，默认是rem（可以根据需要替换成任意单位，如vw,rpx）

