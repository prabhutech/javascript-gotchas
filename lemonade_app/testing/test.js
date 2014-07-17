QUnit.module("transactionModule");
QUnit.test("Product items should be 3", function(assert) {
   assert.equal(transactionModule.items.length, 3);
});
QUnit.test("Should set the Medium Lemonade quantity to 1", function(assert) {
   transactionModule.setItemCost('mL');
   assert.equal(transactionModule.items[0].quantity, 1);
   assert.equal(transactionModule.getTotalCost(), 10);
});
QUnit.test("Should get the total cost as 0", function(assert) {
   transactionModule.clearCart();
   assert.equal(transactionModule.getTotalCost(), 0);
});
QUnit.test("Should get the total cost as 5", function(assert) {
   transactionModule.clearCart();
   transactionModule.setItemCost('lL');
   assert.equal(transactionModule.getTotalCost(), 5);
});
QUnit.test("Cart should be empty", function(assert) {
   transactionModule.clearCart();
   assert.equal(transactionModule.getTotalCost(), 0);
});

QUnit.module("LEMON");
QUnit.test("Should render two product items on page", function(assert) {
   assert.equal($('.content ul li').length, 3);
});
