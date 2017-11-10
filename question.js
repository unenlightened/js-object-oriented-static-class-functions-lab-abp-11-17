'use strict';

class Question {
  static All(){
    return this._All;
  }

  save(){
    User._All.push(this)
  }
}

Question._All = [];
