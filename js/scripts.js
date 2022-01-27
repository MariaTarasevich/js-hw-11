class User {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }

    set edit(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }

    get(){
        return this.id + ', ' + this.name  + ', ' + this.email + ', ' + this.address + ', ' + this.phone;
    }
}

let user = new User ({id: 213, name: 'John', email: 'john@gmail.com', address: 'NY, Liberty st. 12', phone: '2372167'})

console.log(user.get())


class Contacts {
    data = [];
    add(){
        let newUser = new User(data);
        data.push(newUser);
    }
    edit(id, obj){
        if(this.data[id]){
            data[i]=obj;
        }
        else{
            alert("Пользователя с таким id не существует!");
        }
    }
    remove(id){
       data.splice(id, 1);
    }
    get(){
        return data;
    }
}

class ContactsApp extends Contacts {
    
    constructor () {
        app = document.createElement("div")
        app.classList.add("contacts")
    }
}