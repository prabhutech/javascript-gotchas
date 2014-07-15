/*
This snippet is to demo few basic concepts:
- namespacing
- Self-executing function
- Module pattern
- Taking window object into a module as dependency module.
- private property & public methods, and how to expose methods outside the module
*/

'use strict';

var LEMON = LEMON || {};

LEMON.Marketting = LEMON.Marketting || {};

LEMON.Marketting = (function(w) {

   var promptPopup = function() {
      var n = prompt('Enter your favorite pick', '');
      console.log(n);
   };

   return {
      promptFavoritePick: promptPopup
   }

}(window));

LEMON.Marketting.promptFavoritePick();

//This is interesting because the module methods can still be overwritten eventhough it looks like its carefully boxed inside.
//Uncomment below code to understand.
/*
LEMON.Marketting.promptFavoritePick = function() {
   console.log('second one');
}

LEMON.Marketting.promptFavoritePick();
*/