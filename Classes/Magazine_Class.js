
module.exports=class Magazine{

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
    set publishedAt (publishedAt)
    {
        this._publishedAt=publishedAt;
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