
// BUDGET CONTROLLER
var budgetController = (function() {

    // Function Constructor
    var Expense = function(id, decription, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, decription, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };



})();



// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add_description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }
    
    return {
        getinput: function() {

            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings
        }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    //Function where all our event listeners are located to keep organized

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
    
            if(event.keycode === 13 || event.which === 13) {
    
                ctrlAddItem();
                
            }
    
        });
    };



    //Making a function because we don't want to repeat ourselves (DRY)

    var ctrlAddItem = function() {

        // 1. Get the field input data

        var input = UICtrl.getinput();
        

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget 

        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }




})(budgetController, UIController);


controller.init();
