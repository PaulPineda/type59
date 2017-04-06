var Type59s = function(){
  var instance;
  function init(){
    var _instances = {},
    o = {}

    Object.defineProperty(o, 'instances',{
      get: function getInstances(){ return _instances; },
      enumerable: true
    });
    Object.defineProperty(o, 'create',{
      value: function newType59(id,type){
        //if(!id)throw new Error('Cannot create new Type59 with id '+id);
        //if(!type)throw new Error('Cannot create new Type59 with type '+type);
        //if(id in _instances)throw new Error('Type59 instance exists with of id '+id);
        var type59 = Object.create(Type59(id,type));
        _instances[id] = type59;
        return type59;
      }
    });
    Object.defineProperty(o, 'remove', {
      value: function removeInstance(id){
        delete _instances[id];
      }
    })
    return o;
  }
  return {
    getInstance: function(){
      if(!instance)
        instance = init();

      return instance;
    }
  };
};




var Type59Proto = function Type59Proto(state){
  var _state = {
        id: 'elem',
        type: 'type59',
        container: '.content_inner',
        def: {}
      },
  o = {};
  _state = set_state(state);
  
  function set_state(newState){
    return Object.assign({}, _state, state);
  }
  function defineStatePropOnO(key){
    return Object.defineProperty(o, key, {
      get: function(){ return _state[key]; },
      set: function(val){
        if(typeof val === 'string'){
          // dynamic object props don't work in IE yet
          // _state =  Object.assign(_state, {[key]: val});
          // so:
          var newVal = {}
          newVal[key] = val;
          _state = Object.assign(_state, newVal);
        }
      }
    });
  }
  defineStatePropOnO('id');
  defineStatePropOnO('type');
  defineStatePropOnO('container');

  Object.defineProperty(o, 'content', {
    get: function(){ return _state.def; },
    enumerable: true
  });

  Object.defineProperty(o, 'setContent', {
    value: function(val){
      if(Object.prototype.toString.call(val) === '[object Object]'){
        var newDef = Object.assign(_state.def, val);
        _state =  Object.assign(_state, {def: newDef});
        return _state.def;
      }
      throw new Error('Cannot set state value of '+val)
    },
    enumerable: false
  });

  return o;
},
Type59 = function Type59(){
  return Object.create(Type59Proto)
}



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

  qof =  z.create(id, 'qof', null, def);//Object.create(Type59());
  qof.id = id;
  qof.type = 'qof';

  // define QOF defintion Object (should pull from qofMeta)
  def = def || {
    q: '',
    o: [],
    f: ''
  };
  qof.setContent(def);

  return qof;
};

var Mcq = function Mcq(id, def){
  var mcq;

  if(!id)throw new Error('Cannot create MCQ with id of ' + id);

  def = def || {};

  mcq = Qof(id, def);
  mcq.type = 'mcq';

  return mcq;
};

var z = Type59s().getInstance(),
  t = Type59s(),
  q = Qof('QWOFFFFEEE'),
  m = Mcq('MCQNAAAB'),
  instanceMap = Object.keys(z.instances).map(function(key){
    return z.instances[key];
  })

document.addEventListener('DOMContentLoaded', function(){
  domLoaded();
})
function domLoaded(){
  instanceMap.forEach(function(instance){
    var ci = document.querySelector('.content_inner'),
      div = document.createElement('div'),
      h2 = document.createElement('h1'),
      p = document.createElement('p'),
      b = document.createElement('button');
    h2.textContent = instance.id;
    p.textContent = instance.type;
    b.setAttribute('data-id', instance.id);
    b.textContent = 'Edit';

    b.addEventListener('click', function(e){
      console.log(this.getAttribute('data-id'), z.instances[this.getAttribute('data-id')]);
    });

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(b);
    ci.appendChild(div);
  });
};
