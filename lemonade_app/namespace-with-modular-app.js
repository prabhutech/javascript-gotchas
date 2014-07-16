/*
This snippet is to demo few basic concepts:
- namespacing
- Self-executing function
- Module pattern
- Taking window object into a module as dependency module.
- private property & public methods, and how to expose methods outside the module.
- A sample module injected into the LEMON app as dependency.
*/
'use strict';
var LEMON = LEMON || {};
LEMON.Marketting = LEMON.Marketting || {};

LEMON.Marketting = (function(w, transactionModule, $) {

   var promptPopup = function() {
      console.log('first one');
   };

   var refreshView = function() {
      var str = "";
      for (var i = 0; i < transactionModule.items.length; i++) {
         str += "<li id='" + transactionModule.items[i].id + "'>" + transactionModule.items[i].name + " | " + transactionModule.items[i].quantity + "</li>";
      }
      $('.content ul').html(str);
      $('#cart').html('<span>Total cost: ' + transactionModule.getTotalCost() + '</span>');
   }

   var init = function() {
      refreshView();
      $('.content ul').on('click', '>li', function(e) {
         var id;
         console.log(e.target);
         id = $(e.target).attr('id');
         transactionModule.setItemCost(id);
         refreshView();
      });
   };

   return {
      promptFavoritePick: promptPopup,
      init: init
   }

}(window, transactionModule, $));

LEMON.Marketting.init();

//This is interesting because the module methods can still be overwritten eventhough it looks like its carefully boxed inside.
//Uncomment below code to understand.

// LEMON.Marketting.promptFavoritePick = function() {
//    console.log('second one');
// }

// LEMON.Marketting.promptFavoritePick();