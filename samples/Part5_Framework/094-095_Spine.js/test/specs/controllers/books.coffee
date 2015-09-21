require = window.require

describe 'Books', ->
  Books = require('controllers/books')
  
  it 'can noop', ->
    