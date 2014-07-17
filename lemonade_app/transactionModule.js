transactionModule = (function() {

   var items = [{
      name: 'Medium Lemonade',
      id: 'mL',
      cost: 10,
      quantity: 0,
   }, {
      name: 'Large Lemonade',
      id: 'lL',
      cost: 5,
      quantity: 0
   }, {
      name: 'healthy Snack',
      id: 'hS',
      cost: 5,
      quantity: 0
   }];

   var setItemCost = function(item) {
      for (var i = 0; i < items.length; i++) {
         if (items[i].id === item) {
            items[i].quantity++;
         }
      }
   };

   var clearCart = function() {
      for (var i = 0; i < items.length; i++) {
            items[i].quantity = 0;
      }
   };

   var getTotalCost = function() {
      var totalCost = 0;
      for (var i = 0; i < items.length; i++) {
         totalCost = totalCost + (items[i].quantity * items[i].cost);
      }
      return totalCost;
   };

   return {
      setItemCost: setItemCost,
      items: items,
      getTotalCost: getTotalCost,
      clearCart: clearCart
   }

}());