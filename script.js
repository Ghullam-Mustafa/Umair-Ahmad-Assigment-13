button1.onclick = function () {
    // localStorage.setItem("firstName","Talha Irfan")

  let newName = prompt("Enter Your Name ?")

  var names = localStorage.getItem('users') 

  if (names == null) {
    names = []
  }else{
    names = JSON.parse(names)
  }
  console.log(names);
  names.push(newName)
  console.log(names);

  localStorage.setItem('users',JSON.stringify(names))
  result.innerHTML = newName + " have been stored in storage"
}

button2.onclick = function () {
    var names = localStorage.getItem('users')
    console.log(names);

    if (names == null) {
        alert("There is nothing to print")
        return
    }

    names = JSON.parse(names)
    result.innerHTML = names 
}

button3.onclick = function () {
    localStorage.removeItem('users')
    result.innerHTML = "All users have been deleted from storage"
}