/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 200;
if(burgerPrice > 500)
{
    console.log("Yaay! you get a free coke.");
}
else{
    // price=burgerPrice+30;
    console.log("Sorry! you have to pay for it "+ Number(burgerPrice+30) +" taka");
}
//==
if(5 =='5')
{
    console.log("true");
}
else{
    console.log("false");
}
//===
if(5 ==='5')
{
    console.log("true");
}
else{
    console.log("false");
}