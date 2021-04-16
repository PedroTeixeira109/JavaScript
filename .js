let writeOutput = function(text)
{
    document.write(<h1>${text}</h1>);
}
writeOutput ("Done!");

class Mamifero
{
    constructor(name)
    { 
        this.name = name;
    }
    DrinkMilk()
    {
        return "Look at me, i'm driking milk";
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
        return"look at me, i'm eat meat";
    }
}

let mamifero = new Mamifero("Lucky");
let bear = new Bear("Vodka")

let mamiferos = [mamifero, bear];

for (let i= 0; i <Mamifero.length; i++)
{
    writeOutput(mamiferos[i].name);
    writeOutput(mamiferos[i].DrinkMilk);
}