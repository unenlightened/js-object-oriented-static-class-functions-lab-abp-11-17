'use strict';

class Question {
  static All(){
    return this._All;
  }

  save(){
    Question._All.push(this);
  }

  constructor(){
    return this._content;
  }
}

Question._All = [];
