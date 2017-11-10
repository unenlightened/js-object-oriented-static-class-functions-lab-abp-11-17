'use strict';

class Question {
  save(){
    User._All.push(this)
  }

  static All(){
    return this._All;
  }


}

Question._All = [];
