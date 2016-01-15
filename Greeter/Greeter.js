(function(global){

var Greetr = function(firstName, lastName, language){
  return new Greetr.init(firstName, lastName, language);
}

var supportedLangs = ['en', 'es'];
greetings = {
  en: 'Hello',
  es : 'Hola'
};
formalGreetings = {
  en : 'Greetings',
  es: 'Saludos'
}

Greetr.prototype = {
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  validate : function(){
    if(supportedLangs.indexOf(this.language) === -1 ){
      throw 'Invalid Language';
    }
  },

  greeting : function() {
    return greetings[this.Language] + " "+ this.firstName
  },

  formalGreeting : function() {
    return formalGreetings[this.language] + " " + this.fullName();
  },

  greet: function(formal){
    var msg;
    if(formal){
      msg = this.formalGreeting();
    }else{
      msg = this.greeting();
    }
    console.log(msg);
    return this;
  },

  setLanguage: function(lang){
    this.language = lang;
    validate(this.language);
    return this;
  }
};

Greetr.init = function(firstName, lastName, language){
  var self = this;
  self.firstName = firstName || '';
  self.lastName = lastName || '';
  self.language = language || 'en';
}
Greetr.init.prototype = Greetr.prototype;
global.Greetr = global.G$ = Greetr;

}(window));
