/* Guess then Bussiness Name */

/* Adjectives */

let adj = {
    adj1: "Crazy",
    adj2: "Amazing",
    adj3: "Fire",
};


let adjItem = (adj) => {
    let values = Object.values(adj);
    let randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];        
    
}; 
let randomAdj = adjItem(adj);
 
/* Shop Name */

let shopName = {
    shopName1: "Engine",
    shopName2: "Foods",
    shopName3: "Garments",
}

let shopNameItem = (shopName) => {
    let values = Object.values(shopName);
    let randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
};
let randomShopName = shopNameItem(shopName);

/* Another Wrod */

let anotherWord = {
    anotherWrod1: "Bros",
    anotherWrod2: "limited",
    anotherWrod3: "Hub",
} 

let anotherWordItem = (anotherWord) => {
    let values = Object.values(anotherWord);
    let randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}
let randomAnotherName = anotherWordItem(anotherWord);

/* final Business Name */

const BusinessName = `Business Name: ${randomAdj} ${randomShopName} ${randomAnotherName}`;
console.log(BusinessName);

/* Business ID */

let BusinessID = prompt("Enter Your for Making good Business ID");
let make_BuinessID =` @${BusinessID}${BusinessID.length} `;
console.log(`Sir this Your Bussiness ID: ${make_BuinessID}`);
