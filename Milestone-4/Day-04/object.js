var mobile = {
    color: 'black',
    price: 19000,
    screenSize: 5,
    Storage: '128gb',
    processor:'snapDragon750g'
};

// Different ways to set a value of an object element //

// method-1
mobile.color = 'silver';

// method-2
mobile["price"] = 23000;

// method-3
var mobilePrice = "price";
mobile[mobilePrice] = 69000;


console.log(mobile.price);