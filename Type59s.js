// Type59s module (singelton):
// - create Type59 instances
// - store reference to these instances in an object where instance id is key
(function (exports){
  function Type59s(){
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
  }
  exports.Type59s = Type59s().getInstance();
}((typeof exports === 'undefined') ? window : exports));
