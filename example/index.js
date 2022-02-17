"use strict";

const fs = require("fs");
const postcss = require("postcss");
const unitTransform = require("..");

const css = fs.readFileSync("main.css", "utf8");
const options = {
  replace: true,
  unit: "rpx",
  rootValue: 0.5,
  propList: ["*"]
};
const processedCss = postcss(unitTransform(options)).process(css).css;

fs.writeFile("main-rpx.css", processedCss, function(err) {
  if (err) {
    throw err;
  }
  console.log("Rem file written.");
});
