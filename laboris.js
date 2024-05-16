let hasMoney = true; // This should be set based on some condition

function getWalletContents(hasMoney) {
  if (typeof hasMoney !== 'boolean') {
    throw new Error('Invalid input: hasMoney must be a boolean');
  }
  
  if (hasMoney) {
    return {
      cash: 100,
      cards: ['credit card', 'debit card']
    };
  }
  
  return null;
}

let walletContents = getWalletContents(hasMoney);
console.log(walletContents);
