/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/



/*numero km ed età passeggero*/
    let kmNumber = prompt("Di quanti km sarà il tuo viaggio?");
    console.log(kmNumber)
    let age = prompt("Quanti anni hai?");
    console.log(age)

/*calcolo prezzo standard*/
    let standardPrice = kmNumber * 0.21;
    console.log(standardPrice)



/*calcolo prezzo per gli Under 18 e gli Over 65*/
    if (age < 18) {
        let underDiscount = ((standardPrice * 20) / 100);
        let underCost = standardPrice - underDiscount;
        console.log(underCost);
    }else if (age > 65) {
        let overDiscount = ((standardPrice * 40) / 100);
        let overCost = standardPrice - overDiscount;
        console.log(overCost);
    }else {
        console.log("non è stato applicato nessuno sconto");
    }


