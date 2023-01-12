// credit card from visual outlines of the steps
const visua1 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6, 4];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Below function validates credit cards
const validateCred = arr => {
  let checkedArr = []; // declare/initialize empty array
  let sum = 0; // declare/initialize sum variable to 0

  // Traverse the passed array backwards
  for(let i=arr.length-1; i > 0; i--) {
 // 5 lines bellow used to double every other index value
    i -=1;
    let double = i;
    let single = i+1;
    
    let singleElm = arr[single];
    let doubledElm = arr[double]*2;
    let doubledElmMinus9;
    
    // fill checked array with proper values
    checkedArr.unshift(singleElm);
    
    // If even index value > 9 substract it by 9
    // put it in the check array
    if( doubledElm > 9 ) {
        doubledElmMinus9 = doubledElm -9;
        checkedArr.unshift(doubledElmMinus9);
    } else {
      // even index value < 9, just put it the array
      checkedArr.unshift(doubledElm);
    }
  } // End of For Loop

  // Sum up all the digits in the credit card.
  for(let j=0; j < checkedArr.length;j++) {
    sum += checkedArr[j];
    }
   // will return true for valid, false for invalid
   return sum % 10 === 0;
};

const findInvalidCards = nestedArr => {
  let invalidBatch = [];
  nestedArr.forEach(credits => {
    // call validateCred function
    if(validateCred(credits) === false) {
      // Only InValids are added to invalidBatch array
        invalidBatch.push(credits);
    } 
  }
  ); 
  return invalidBatch;   // return an array of Invalids
}; // Ends findInvalidCards function.

// Function to Identify/record credit card corp that
// mailed out invalid cards.
const idInvalidCardCompanies = nestedInvalidArr => {
    let cardCompanies = [];
    nestedInvalidArr.forEach(credits => {
      console.log('Printing the invalid card');
      console.log(credits);
      
      let found = credits[0];
      switch (credits[0]) {
        case 3:
            let found3 = cardCompanies.find(element => element === 'Amex');  // Check for Dups
            // If dups not found then push/record
            if( found3 === undefined) {
            console.log('Pushing value Amex in array for invalids.');
              cardCompanies.push('Amex');
              console.log('Amex pushed');
            } else {console.log(`${found} 1st value for Amex found in array. Dup Not pushed`)}
            // console.log('Amex');
            break;
        case 4:
             let found4 = cardCompanies.find(element => element === 'Visa');
             if(found4 === undefined) {
              console.log('Pushing value Visa in array for invalids.');
              cardCompanies.push('Visa');
              console.log('Visa pushed');
            } else {console.log(`${found} 1st value for Visa found in array. Dup Not pushed`)}
             break;
        case 5:
             let found5 = cardCompanies.find(element => element === 'Mastercard');
              if(found5 === undefined) {
                  console.log('Pushing value Mastercard in array for invalids.');
              cardCompanies.push('Mastercard');
              console.log('Mastercard pushed');
            } else {console.log(`${found} 1st value for Mastercard found in array. Dup Not pushed`)}
             break;
        case 6:
            let found6 = cardCompanies.find(element => element === 'Discover');
            if(found6 === undefined) {
                console.log('Pushing value Discover in array for invalids.');
              cardCompanies.push('Discover');
              console.log('Discover pushed');
            } else {console.log(`${found} 1st value for Discover found in array. Dup Not pushed`)}
            // console.log('Amex');
            break;
        default:
              // Card does not start with credit corp ID
              console.log('Company not found');
              break;
      } // Ends switch/case
    }
    ); // Ends forEach method
    console.log('\nCard Companies that sent invalid cards recorded.');
    console.log('Printing Corps that mailed invalid cards');
    console.log(cardCompanies);
    return cardCompanies;
}; // Ends idInvalidCardCompanies function

// Let us find invalid cards from the batch of cards
const invalidCards = findInvalidCards(batch);
idInvalidCardCompanies(invalidCards);
