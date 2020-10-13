// regression test for async/await
// code inspired by https://github.com/formium/tsdx/issues/869
let shouldBeTrue = false;
(async () => {
  await Promise.resolve();
  shouldBeTrue = true; // a side effect to make sure this is output
})();
