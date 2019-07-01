// Item Controller
export default {}
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // Data Structure / State
    const data = {
        items: [
            //   {
            //     id: 0,
            //     name: "Steak Dinner",
            //     calories: 679
            //   },
            //   {
            //     id: 1,
            //     name: "Apple",
            //     calories: 52
            //   },
            //   {
            //     id: 2,
            //     name: "Avocado",
            //     calories: 160
            //   }
        ],
        currentItem: null,
        totalCalories: 0
    };

    // Public methods
    return {
        getItem: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            let ID;
            // Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Calories to number
            calories = parseInt(calories);

            // Create new item
            newItem = new Item(ID, name, calories);

            // Add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function (id) {
            let found = null;
            // Loop through items
            data.items.forEach(function (item) {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function (name, calories) {
            // Calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function (item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        getTotalCalories: function () {
            let total = 0;
            // Loop through items and add to total calories
            data.items.forEach(function (item) {
                total += item.calories;
            });
            // Set total cal in data structure
            data.totalCalories = total;
            // Return total
            return data.totalCalories;
        },
        logData: function () {
            return data;
        }
    };
})();