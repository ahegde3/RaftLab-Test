
module.exports=class Books{

    constructor(){}
    set title(title){
        this._title=title;
    }
    set isbn(isbn){
        this._isbn=isbn;
    }
    set authors(authors)
    {
        this._authors=authors;
    }
    set description (description)
    {
        this._description=description;
    }
    get title(){
        return this._title
    }
    get authors()
    {
        return this._authors
    }
    get isbn()
    {
        return this._isbn
    }
}