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


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {33
            var newItem, ID;

            //ID = last ID + 1
            //Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else { 
                ID = 0;
            }
            

            //Create new item based on 'inc' or 'exp' type 
            if (type === 'exp') {
                newItem = new Expense (ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income (ID, des, val);
            }

            //Push it into our data structure 
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;

        },

        testing: function() {
            console.log(data);
        }
    };


})();



// UI CONTROLLER
var UIController = (function() {33

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add_description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }
    
    return {
        getInput: function() {

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
    2
        });
    };



    //Making a function because we don't want to repeat ourselves (DRY)

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the field input data

        var input = UICtrl.getInput();
        

        // 2. Add the item to the budget controller

        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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