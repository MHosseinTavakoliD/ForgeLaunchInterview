/*
My brand new startup wants to build a better online productivity tracker.
We think that current trackers are far too complicated,
and we want to make something that is a simple to-do list…
 */

// create an empty list array
let toDOList = [];

// Add Item
function addItem (title, descripton, dateDue) {
    const newItem = [title, descripton, dateDue, new Date(), 'New']
    toDOList.push(newItem)
}

// bring up the item (one order)
function moveItemUp(index){
    if (index >= 0 && index < toDOList.length+ 1){
        [toDOList[index], toDOList[index - 1]] = [toDOList[index-1], toDOList[index]]
    }
}

//bring down an item (one order)
function moveItemDown(index){
    if (index >= 0 && index < toDOList.length - 1) {
        [toDOList[index], toDOList[index +1]] = [toDOList[index +1], toDOList[index]]
    }
}

// change status
function changeStatus (index, newStatus) {
     if (index >= 0 && index < toDOList.length +1 ) {
         toDOList[index][4] = newStatus;
     }
}

// delete item
function delItem(index){
    if (index >= 0  && index < toDOList.length + 1) {
        toDOList.splice(index, 1)
    }
}

// dispaly the todolist
function displayList() {
    console.log(toDOList);
}


// test
addItem('Task 1', 'Description 1', '2024-01-30');
addItem('Task 2', 'Description 2', '2024-01-31');
addItem('Task 3', 'Description 3', '2024-02-01');
moveItemUp(1);
changeStatus(0, 'Working on');
delItem(2)
// Display the current list
displayList();