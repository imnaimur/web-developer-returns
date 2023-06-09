const toDos = [
    {
        "id": 1,
        "text": "Take the trash",
        "status":true
    },
    {
        "id": 2,
        "text": "Meeting with boss",
        "status":true
    },
    {
        "id": 1,
        "text": "Doctor appt",
        "status":false
    }
]

const statusCheck = toDos.filter(function(todo){
    return todo.status == true;
}).map(function(todo){
    console.log( todo.text);
})
// console.log(statusCheck)