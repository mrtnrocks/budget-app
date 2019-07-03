
    // BUDGET CONTROLLER
var budgetController = (function() {

 

})();


    // UI CONTROLLER
var UIController = (function() {

    // Some code

})(); 


    // GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctlrAddItem = function() {
                
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        console.log('work');
    }

    document.querySelector('.add__btn').addEventListener('click', ctlrAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            
            ctlrAddItem();

        }
    });

})(budgetController, UIController);

