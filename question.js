'use strict';

class Question {
  static All(){
    return this._All;
  }

  save(){
    Question._All.push(this);
  }

  constructor(content){
    return content;
  }
}

Question._All = [];
