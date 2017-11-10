'use strict';

class Question {
  static All(){
    return this._All;
  }

  save(){
    Question._All.push(this);
  }

  constructor(content){
    this.content = content;
    this.save();
  }

  static find(id){
    
  }
}

Question._All = [];
