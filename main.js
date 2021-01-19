// console.log(items)



// -- Question 1 ---
//      What is the average price of all items?
// d:   number
// a:   1.  Find the total amount of items in the item list
//      2.  add all the items together
//      3.  divide the total sum of all the items by 
//          the total number of items
//      4.  deliver that total to the html document.

let avgItems = items.length
// console.log (avgItems)
let total = 0

items.forEach (function(item) {
    total = total + item.price
})

let priceAvg = total / avgItems
// console.log (priceAvg)

document.querySelector(`#answer1`).innerHTML = `The average price is $${priceAvg}`

//  -- Question 2 --
//  Show me an array of items that cost between $14.00 
//  and $18.00 USD?
//  d:  number
//  a:  1.  filter through prices to return less than or equal to $18 
//          AND more than or equal to $14
//      2.  Assign them to a variable
//      2.5 move through the newArray and list the titles of the newArray as a 
//           list. (arr.map)
//      3.  Display that list in the html document.

let newArray = 
items.filter (function (item) {
    return (item.price >= 14.00 && item.price <= 18.00)
})

// console.log(newArray)

const priceTitles =

newArray.map (function (title){
    return `<li>${title.title}</li> <br>` 
})

// console.log(priceTitles)

document.querySelector(`#answer2`).innerHTML = (priceTitles)


//  p:  -- Question 3 --
//      Which item has a "GBP" 
//      currency code? Display it's name and price.
//  d:  string with number
//  a:  1.  filter through the items for currency_code == "GBP"
//      2.  return the GBP Items
//      3.  display the object key strings of "name" and "currency_code" -> .map
//      4.  import that into the DOM -> html document.

let filterItems= items.filter (function (curr){
    return curr.currency_code == "GBP"
})

// console.log(filterItems)

let newTitle =  filterItems.map (function (x){
    return `The ${x.title} costs $${x.price}`}).join ("")

// console.log(newTitle)

document.querySelector(`#answer3`).innerHTML = (newTitle)
 
// -- Question 4 --
//  Display a list 
//  of all items who are made of wood.
// 
//  data structure: string
//  a:
//      -filter through items for the object arrays containing the 
//      material of wood.
//      -map them into an array of titles, with the material listed 
//      listed alongside.
//      -add that to the DOM

let woodItems =
items.filter (function (x){
    return x.materials.includes ('wood')
})

// console.log(woodItems)

let woodItemList = woodItems.map (function(x){   
    return `<li> ${x.title} </li><br>`
}).join("")

document.querySelector(`#answer4`).innerHTML = (woodItemList)


//  5. Which items are made of eight or more materials? Display the name, 
//  number of items and the items it is made of.

/*  d:  strings
    a:  - filter for 'materials' arr lengths that are greater than 
        or equal to 8 and dump that in a variable.
        - create a variable for the number of items (number)
        - map to display the arr.title (string), arr.material.length and numberItems variable
        - link to the DOM
*/

const matTotals = items.filter (function (x) {
    return x.materials.length >= 8
})

const listMaterial = matTotals.map(function (item) {
   const mergeMatsNewList = item.materials.map(function (x){
    return `${x}`
   })
    return mergeMatsNewList.join("<br>")
})

console.log(listMaterial)

 

//try to format at every array index spot to list that number.
// const forEachArrItem = 

// arraySpot = 

// matTotals.forEach (function (e) {
//     arraySpot = 
// })

document.querySelector(`#answer5`).innerHTML = (listMaterial)


//   Question 6 How many items were made by their sellers? "i_did"

let madeItems = 
items.filter (function(made){
    return made.who_made.includes ('i_did')
})

let numOfMadeItems = madeItems.length

let htmlStuff = `${numOfMadeItems} items were made by their sellers`

document.querySelector(`#answer6`).innerHTML = (htmlStuff)
