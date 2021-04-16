let writeOuput = function(text)
{
    document.write(<h1>${text}</h1>)
}
writeOuput ("Done!");

class Mamifero
{
    constructor(name)
    { 
        this.name = name;
    }
    DrinkMilk()
    {
        return "Look at me, i'm driking milk"
    }
}
class Bear extends Mamifero 
{
    constructor(name)
    {
        super(name);
    }
    DrinkMilk() 
    {
        return"look at me, i'm eat meat"
    }
}

let Mamifero = new Mamifero("Lucky");
let Bear = new Bear("Vodka")

for (let i= 0; i <Mamifero.length; i++)
{
    writeOuput(Mamifero[i].name);
    writeOuput(Mamifero[i].DrinkMilk);
}