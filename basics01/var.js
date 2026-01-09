const account_ID=133456;
let accountEmail="navajot@gmail.com";
var accountPassword="mishra@25";
accountcity="jaipur";
let accountState;


// accountID= 2 not allowed
accountEmail="mishranavajot2gmail.com";
accountPassword ="242573638";
accountcity="mumbai"

console.log(account_ID);


/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

console.table([account_ID, accountPassword,accountEmail,accountcity ,accountState]);
