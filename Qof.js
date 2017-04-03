var Type59 = require('./Type59.js');

var Qof = function Qof(id, def){
  var qofMeta, qof;

  if(!id)throw new Error('Cannot create MCQ with id of ' + id);

  qofMeta = {
   q: {val:'', type:'cke'},
   o: {val:[], type:{
        content: {val:'', type:'cke'},
        correct: {val:[], type:'selector', options:[
          {label:'False', value:false},
          {label:'True', value:true}
        ]}
      }},
   f: {val:'', type:'cke'}
  };

  qof =  Object.create(Type59());
  qof.id = id;

  // defined QOF defintion Object
  def = def || {
    q: '',
    o: [],
    f: ''
  };

  return Object.assign(qof, def);
}

function defineType59FormInput(o, key, settings){
  var typeOfVal = Object.prototype.toString.call(o.key.val);
  switch(typeOfVal){
    case '[object Number]':
    case '[object String]':
    break;

    case '[object Boolean]':
    break;

    case '[object Array]':
    break;

    case '[object Object]':
    break;
  }
  Object.defineProperty(o, key, settings);
}


module.exports = Qof;
