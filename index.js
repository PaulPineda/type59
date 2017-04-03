var Type59 = function testProto(){
  var _state = {
        id: 'elem',
        type: 'type59',
        container: '.content_inner',
        def: {}
      },

  o = {};


  function defineStatePropOnO(key){
    return {
      get: function(){ return _state[key]; },
      set: function(val){
        if(typeof val === 'string'){
          // dynamic object props don't work in IE yet
          // _state =  Object.assign(_state, {[key]: val});
          // so:
          _state = Object.assign(_state, {}[key] = val);
        }
      },
      enumerable: true
    }
  }
  defineStatePropOnO('id');
  defineStatePropOnO('type');
  defineStatePropOnO('.container');

  Object.defineProperty(o, 'content', {
    get: function(){ return _state.def; },
    enumerable: true
  });

  Object.defineProperty(o, 'setContent', {
    value: function(val){
      if(Object.prototype.toString.call(val) === '[object Object]'){
        var newDef = Object.assign(_state.def, val);
        _state =  Object.assign(_state, {def: newDef});
        return _state;
      }
      throw new Error('Cannot set state value of '+val)
    },
    enumerable: false
  });


  return o;
};


var Qof = function Qof(id, def){
  var qofMeta, qof;

  if(!id)throw new Error('Cannot create QOF with id of ' + id);

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

var Mcq = function Mcq(id, def){
  var mcq;

  if(!id)throw new Error('Cannot create MCQ with id of ' + id);

  def = def || {};

  mcq =  Object.assign(Qof(id), {content:def});
  mcq.id = id;

  return Object.assign(mcq, def);
}
