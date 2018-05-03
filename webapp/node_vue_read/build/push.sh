#!/bin/bash
sed -i 's/\"static\/js\/\"/\"kindle\/static\/js\/\"/g' ./dist/static/js/manifest.*.js
rm -rf ../../protected/public/kindle/*
cp -r dist/* ../../protected/public/kindle/
