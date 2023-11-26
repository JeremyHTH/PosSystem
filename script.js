const DisplayAllButton = document.getElementById("DisplayAll")
const DisplayBreakfastButton = document.getElementById("DisplayBreakfast")
const DisplayLunchButton = document.getElementById("DisplayLunch")
const DisplayDinnerButton = document.getElementById("DisplayDinner")
const DebugButton = document.getElementById("Debug")

const MenuItemContainer = document.getElementById('ItemPage')

var MenuItemList, DrinkOptionList, MainDishOptionList, SpecialOptionList;
const LoadData = async () =>
{
    let P1 = await fetch('GeneratedJSON\\Item.json')
        .then((response) => { return response.json()})
        .then((json) => {MenuItemList = json})
        
    console.log(MenuItemList);

    MenuItemList.forEach((FoodItem, Index) => {
        MenuItemContainer.innerHTML += `<div class="Item" Breakfast> <h3 class="ItemName"> ${FoodItem.Name} </h3> </div>`
    })

    const AllList = document.querySelectorAll(".Item")

    console.log(AllList.length);

    AllList.forEach((Item, Index) =>{
        Item.addEventListener('click', () =>
        {
            let Name = Item.querySelector(".ItemName").innerHTML;
            console.log(Name);
    
            const CurrOrder = document.createElement('div');
            CurrOrder.classList.add('Order');
    
            const OrderedItem = document.createElement('h1')
            OrderedItem.classList.add("OrderName")
            OrderedItem.innerHTML = Name
            CurrOrder.appendChild(OrderedItem)
    
            const CancelButton = document.createElement('button')
            CancelButton.classList.add("CancelButton")
            CancelButton.innerHTML = 'Cancel'
            CurrOrder.appendChild(CancelButton)
    
            OrderList.appendChild(CurrOrder)
    
            CancelButton.addEventListener('click', () =>
            {
                OrderList.removeChild(CurrOrder)
            })
    
            OrderList.appendChild(CurrOrder)
            
            // let NewItem = `<div> <h1> ${Name} </h1> <button>Cancel</button> </div>`
            // OrderList.innerHTML += NewItem
            
        })
    })
}
LoadData()

const AllList = document.querySelectorAll(".Item")
const BreakfastList = document.querySelectorAll(".Item[Breakfast]")
const LunchList = document.querySelectorAll(".Item[Lunch]")
const DinnerList = document.querySelectorAll(".Item[Dinner]")

const OrderList = document.getElementById("OrderList")
const ConfirmButton = document.getElementById("ConfirmButton")
const ClearButton = document.getElementById("ClearButton")

console.log(AllList.length);

AllList.forEach((Item, Index) =>{
    Item.addEventListener('click', () =>
    {
        let Name = Item.querySelector(".ItemName").innerHTML;
        console.log(Name);

        const CurrOrder = document.createElement('div');
		CurrOrder.classList.add('Order');

        const OrderedItem = document.createElement('h1')
        OrderedItem.classList.add("OrderName")
        OrderedItem.innerHTML = Name
        CurrOrder.appendChild(OrderedItem)

        const CancelButton = document.createElement('button')
        CancelButton.classList.add("CancelButton")
        CancelButton.innerHTML = 'Cancel'
        CurrOrder.appendChild(CancelButton)

        OrderList.appendChild(CurrOrder)

        CancelButton.addEventListener('click', () =>
        {
            OrderList.removeChild(CurrOrder)
        })

        OrderList.appendChild(CurrOrder)
        
        // let NewItem = `<div> <h1> ${Name} </h1> <button>Cancel</button> </div>`
        // OrderList.innerHTML += NewItem
        
    })
})

DisplayAllButton.addEventListener('click',() =>
{
    SetBreakfastStatus(true)
    SetLunchStatus(true)
    SetDinnerStatus(true)
})
DisplayBreakfastButton.addEventListener('click',() =>
{
    SetBreakfastStatus(true)
    SetLunchStatus(false)
    SetDinnerStatus(false)
})
DisplayLunchButton.addEventListener('click',() =>
{
    SetBreakfastStatus(false)
    SetLunchStatus(true)
    SetDinnerStatus(false)
})
DisplayDinnerButton.addEventListener('click',() =>
{
    SetBreakfastStatus(false)
    SetLunchStatus(false)
    SetDinnerStatus(true)
})
function SetBreakfastStatus(Display)
{
    console.log("BreakFast Called: ", Display);
    if (Display)
    {
        BreakfastList.forEach((Item) => 
        {
            Item.removeAttribute("hidden")
        })
    }
    else
    {
        BreakfastList.forEach((Item) => 
        {
            Item.setAttribute("hidden", "True")
        })
    }
}

function SetLunchStatus(Display)
{
    console.log("Lunch Called: ", Display);
    if (Display)
    {
        LunchList.forEach((Item) => 
        {
            Item.removeAttribute("hidden")
        })
    }
    else
    {
        LunchList.forEach((Item) => 
        {
            Item.setAttribute("hidden", "True")
        })
    }
}

function SetDinnerStatus(Display)
{
    console.log("Dinner Called: ", Display);
    if (Display)
    {
        DinnerList.forEach((Item) => 
        {
            Item.removeAttribute("hidden")
        })
    }
    else
    {
        DinnerList.forEach((Item) => 
        {
            Item.setAttribute("hidden", "True")
        })
    }
}

ClearButton.addEventListener('click', () =>
{
    OrderList.innerHTML = ""
})

ConfirmButton.addEventListener('click', () =>
{
    let OrderDisplay = ""
    SelectedItemList = document.querySelectorAll(".Order")
    SelectedItemList.forEach((Item) => 
    {
        OrderDisplay += Item.querySelector(".OrderName").innerHTML + '\n'
    });

    alert(OrderDisplay)
})

DebugButton.addEventListener('click', () => {console.log(MenuItemList);})