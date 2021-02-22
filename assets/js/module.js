const exptrcker = (dbname, table) => {
    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open();
    return db
}

const insertrecord = (table, data) =>{
    console.log(data)
    let flag = empty(data)
    if(flag) {
        table.bulkAdd([data]);
        console.log("Data successfully loaded")
    }else {
        console.log("Please provide data")
    }
}

const empty = (object) => {
    let flag = true;
    let list = [] 
    for(var value in object){
        if(object[value] != "" && object.hasOwnProperty(value)){
            list.push(true)
        }else {
            list.push(false)
        }
    }
    list.map((i) => {
        if (i === false){
            flag = false
        }
    })
    return flag
}







export default exptrcker;
export {
    insertrecord
}




















































// const exptrcker = (dbname, table) => {
//     const db = new Dexie(dbname);
//     db.version(1).stores(table);
//     db.open();
//     return db
// }

// const insertrecord = (table, data) =>{
//     console.log(data)
//     let flag = empty(data)
//     console.log(data)
//     console.log(flag)
//     if(flag) {
//         table.bulkAdd([data]);
//         console.log("Data successfully loaded")
//     }else {
//         console.log("Please provide data")
//     }
// }

// const empty = (object) => {
//     let flag = false;
//     for(var value in object){
//         if(object[value] != "" && object.hasOwnProperty(value)){
//             flag = true;
//         }else {
//             flag = false;
//         }
//     }
//     return flag
// }



// const updateData = (table, wrap, category, expense_type, amount, date, time) => {
//     let index = 0
//     let obj1 = new Array()
//     let counter = 0
//     table.count((count)=>{
//         if(count){
//             table.each(entity=>{
//                 obj1.push(entity)
//                 counter = count
//             }).then(()=> {

//                 var obj2 = new Array()
//                 console.log(category)

//                 for (let y = 0; y < obj1.length; y++) {
//                     console.log(category)

//                     console.log(obj1[y].category)
        
//                     if(category === obj1[y].category) {
//                         break
//                         obj2.push(obj1[y])
//                         for (let i = 3; i > 0; i--) {
//                             var link1 = document.createElement("div")
//                             link1.innerHTML = `<div class="accordion-body"> <div class="row"> <div class="col-1">${obj2[obj2.length- i].id}</div> <div class="col-3">${obj1[count-i].income_type || obj1[count-i].expense_type}</div> <div class="col-2">${obj1[count-i].amount}</div> <div class="col-2">${obj1[count-i].date}</div> <div class="col-2">${obj1[count-i].time}</div> <div class="col-1"><i class="fas fa-edit" style="color: lightgreen;"></i></div><div class="col-1"><i class="fas fa-trash-alt" style="color: red;"></i></div> </div></div>`
//                             acord.appendChild(link1)
//                         }
                       
//                     }
//                     else {
//                         console.log(obj1)
//                         console.log(obj1[0].category)
//                         // var linkx = acord.firstElementChild
//                         // console.log(linkx)
//                         // acord.appendChild(linkx)
//                         var x = 1
//                         var wrapper = document.createElement("div")
//                             wrapper.innerHTML = `
//                         <div class="accordion-item">
//                                 <h2 class="accordion-header" id="flush-heading${x}">
//                                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${x}" aria-expanded="false" aria-controls="flush-collapseOne">
//                                     ${category}
//                                     </button>
//                                 </h2>
//                                 <div id="flush-collapse${x}" class="accordion-collapse collapse acord${x}" aria-labelledby="flush-heading${x}" data-bs-parent="#accordionFlushExample">
//                                     <div class="accordion-body"> <div class="row"> <div class="col-1">No.</div> <div class="col-3">Expense_type</div> <div class="col-2">Amount</div> <div class="col-2">Date</div> <div class="col-2">Time</div> <div class="col-1">Edit</div><div class="col-1">Delete</div> </div></div>
//                                 </div>
//                         </div>
//                         `
//                         wrap.appendChild(wrapper)

                        
//                         var acord = document.querySelector(`.acord${x}`)
//                         console.log(x)

//                         var link1 = document.createElement("div")
//                         link1.innerHTML = `<div class="accordion-body"> <div class="row"> <div class="col-1">${x}</div> <div class="col-3">${expense_type}</div> <div class="col-2">${amount}</div> <div class="col-2">${date}</div> <div class="col-2">${time}</div> <div class="col-1"><i class="fas fa-edit" style="color: lightgreen;"></i></div><div class="col-1"><i class="fas fa-trash-alt" style="color: red;"></i></div> </div></div>`
//                         acord.appendChild(link1)
//                         x++
//                         break

//                     //     for (let x = 0; x < 3; x++) {
//                     //         var wrapper = document.createElement("div")
//                     //         wrapper.innerHTML = `
//                     //     <div class="accordion-item">
//                     //             <h2 class="accordion-header" id="flush-heading${x}">
//                     //                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${x}" aria-expanded="false" aria-controls="flush-collapseOne">
//                     //                 FOOD
//                     //                 </button>
//                     //             </h2>
//                     //             <div id="flush-collapse${x}" class="accordion-collapse collapse ${category.value}" aria-labelledby="flush-heading${x}" data-bs-parent="#accordionFlushExample">
//                     //                 <div class="accordion-body"> <div class="row"> <div class="col-1">No.</div> <div class="col-3">Expense_type</div> <div class="col-2">Amount</div> <div class="col-2">Date</div> <div class="col-2">Time</div> <div class="col-1">Edit</div><div class="col-1">Delete</div> </div></div>
//                     //             </div>
//                     //     </div>
//                     //     `
//                     //     wrap.appendChild(wrapper)
//                     //     var acord = document.querySelector(`.acord${x}`)
//                     //     acord.innerHTML = ""
//                     //     console.log(x)
                        
//                     //     for (let i = 3; i > 0; i--) {
//                     //         var link1 = document.createElement("div")
//                     //         link1.innerHTML = `<div class="accordion-body"> <div class="row"> <div class="col-1">${obj1[count-i].id}</div> <div class="col-3">${obj1[count-i].income_type || obj1[count-i].expense_type}</div> <div class="col-2">${obj1[count-i].amount}</div> <div class="col-2">${obj1[count-i].date}</div> <div class="col-2">${obj1[count-i].time}</div> <div class="col-1"><i class="fas fa-edit" style="color: lightgreen;"></i></div><div class="col-1"><i class="fas fa-trash-alt" style="color: red;"></i></div> </div></div>`
//                     //         acord.appendChild(link1)
//                     //     }
//                     // }
//                     // }
//                     }
//                     break
//                 }
                




//             //     if(category.value in obj.category) {

//             //         obj2.push

//             //         var acord = document.querySelector(`.${category.value}`)
//             //         acord.innerHTML = ""
//             //         for (let i = 3; i > 0; i--) {
//             //             var link1 = document.createElement("div")
//             //             link1.innerHTML = `<div class="accordion-body"> <div class="row"> <div class="col-1">${obj1[count-i].id}</div> <div class="col-3">${obj1[count-i].income_type || obj1[count-i].expense_type}</div> <div class="col-2">${obj1[count-i].amount}</div> <div class="col-2">${obj1[count-i].date}</div> <div class="col-2">${obj1[count-i].time}</div> <div class="col-1"><i class="fas fa-edit" style="color: lightgreen;"></i></div><div class="col-1"><i class="fas fa-trash-alt" style="color: red;"></i></div> </div></div>`
//             //             acord.appendChild(link1)
//             //         }
//             //     }else {      
//             // }
//             })
//         }
//     })

// }





// export default exptrcker;
// export {
//     insertrecord,
//     updateData
// }