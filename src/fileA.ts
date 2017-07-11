import { test } from './fileB'
const fileC = import(
  /* webpackChunkName: "fileC" */
  /* webpackMode: "lazy" */
  './fileC')

Promise.all([fileC]).then(args => {
  console.log(test);
  console.log(...args)
})

export var bla = 3
