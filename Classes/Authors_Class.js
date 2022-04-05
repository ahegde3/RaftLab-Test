const { last } = require("lodash");

module.exports=class Authors{

    constructor(){}
    set email(email){
        this._email=email;
    }
    set firstname(firstname){
        this._firstname=firstname;
    }
    set lastname(lastname)
    {
        this._lastName=lastname;
    }
    get email(){
        return this._email
    }
    get lastname()
    {
        return this._lastName
    }
    get firstname()
    {
        return this._firstname
    }
}