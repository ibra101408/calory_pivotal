const ItemCtrl = (function (){
    const Item = function (id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }

    const data = {
        items: [
            {id: 0, name: 'Cookie', calories: 1200},
            {id: 1, name: 'Cheese', calories: 650},
            {id: 2, name: 'Eggs', calories: 400},
        ],
        total: 0
    }

    return{
        getItems: function (){
            return data.items
        },
        logData: function (){
            return data
        }
    }
})();



const UICtrl = (function (){
    return {
        populateItemList: function (items){
            let html = '';

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="srcondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
                </li>`;
            });

            document.querySelector("#item-list").innerHTML = html;
        }
    }

})();

const App = (function (ItemCtrl, UICtrl) {
    return {
        init: function () {
            console.log('Initializing App')
            const items = ItemCtrl.getItems()
            UICtrl.populateItemList(items)
        }
    }
})(ItemCtrl, UICtrl);

App.init()