var Type59 = function testProto(){
  var _id = 'elem',
      _type = 'type59',
      _container = '.content_inner',
      _def = {},
      _state = {
        id: _id,
        type: _type,
        container: _container,
        def: _def
      },

  o = {};


  Object.defineProperty(o, 'id', {
    get: function(){ return _state.id; },
    set: function(val){
      if(typeof val === 'string'){
        _state =  Object.assign(_state, {id: val});
      }
    },
    enumerable: true
  });

  Object.defineProperty(o, 'type', {
    get: function(){ return _state.type; },
    set: function(val){
      if(typeof val === 'string'){
        _state =  Object.assign(_state, {type: val});
      }
    },
    enumerable: true
  });

  Object.defineProperty(o, 'state', {
    get: function(){ return _state.def; },

    enumerable: true
  });

  Object.defineProperty(o, 'setState', {
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
}

var MCQ = function MCQ(id, def){
  var mcq;

  if(!id)throw new Error('Cannot create MCQ with id of ' + id);

  def = def || {

  };

  mcq =  Object.create(Type59());
  mcq.id = id;
  return mcq;
}

var t = MCQ('T');
t.state = {newPropT:'some new val'}
var q = MCQ('Q');
