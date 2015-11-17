var assert = require('assert');
var locate = require('../');

describe('Locate', function() {
  
    it('should return true', function () {
      assert.equal(locate(['a','b',['c','d',['e']]],'e'), true);
      assert.equal(locate(['a','b',['c','d',['e']]],'a'), true );
    });

    it('should return false', function () {
      assert.equal(locate(['a','b',['c','d',['e']]],'f'), false);
    });
  
});