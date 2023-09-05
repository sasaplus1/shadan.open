#!/usr/bin/env node

const net = require('node:net');
const iconv = require('iconv-lite');

net
  .createConnection({ port: 23, host: 'koukoku.shadan.open.ad.jp' })
  .pipe(iconv.decodeStream('Shift_JIS'))
  .pipe(iconv.encodeStream('UTF-8'))
  .pipe(process.stdout);
