#!/bin/bash
## 站点根目录，存在多个项目，需要将项目中的路径指向到对应目标
sed -i 's/\"static\/js\/\"/\"kindle\/static\/js\/\"/g' ./dist/static/js/manifest.*.js
sed -i 's/\/static\//\/kindle\/static\//g' ./dist/index.html
rm -rf ../../protected/public/kindle/*
cp -r dist/* ../../protected/public/kindle/
