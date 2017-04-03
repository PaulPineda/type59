var Type59 = require('./Type59.js');

var Mcq = function Mcq(id, def){
  var mcq;

  if(!id)throw new Error('Cannot create MCQ with id of ' + id);

  def = def || {};

  mcq =  Object.create(Type59());
  mcq.id = id;

  return Object.assign(mcq, def);
}
module.exports = Mcq;
