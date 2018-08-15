
// BUDGET CONTROLLER
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return (add(b));
        }
    }
})();



// UI CONTROLLER
var UIController = (function() {
    
    return {
        getinput: function() {
            
        }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    //Making a function because we don't want to repeat ourselves (DRY)

    var ctrlAddItem = function() {

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget 

        // 5. Display the budget on the UI
    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);



    document.addEventListener('keypress', function(event) {

        if(event.keycode === 13 || event.which === 13) {

            ctrlAddItem();
            
        }

    });

})(budgetController, UIController);
