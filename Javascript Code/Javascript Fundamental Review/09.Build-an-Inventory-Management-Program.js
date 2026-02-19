let inventory = [];

function findProductIndex(name) {
  return inventory.findIndex(product => product.name === name.toLowerCase());
}

function addProduct(product) {
  const lowerName = product.name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${lowerName} quantity updated`);
  } else {
    inventory.push({ name: lowerName, quantity: product.quantity });
    console.log(`${lowerName} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const lowerName = name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  const product = inventory[index];

  if (quantity > product.quantity) {
    console.log(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantity;
    if (product.quantity === 0) {
      inventory.splice(index, 1);
    }
    console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);
  }
}