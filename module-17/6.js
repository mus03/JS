/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 12;
const price = 800;
if(age<10){
    console.log("Free");
}
else if(age>=10 && age<=25){
    discount = price * 50 / 100;
    discountedPrice = price - discount;
    console.log("get a 50% discount."+ "discounted price: "+ discountedPrice);
}
else if(age>=60){
    discount = price * 15 / 100;
    discountedPrice = price - discount;
    console.log("get a 15% discount."+ "discounted price: "+ discountedPrice);
}
else{
    console.log("Regular ticket fare 800 tk");
}