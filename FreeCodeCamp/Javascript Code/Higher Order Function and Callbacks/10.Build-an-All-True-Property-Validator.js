function truthCheck(collection, pre) {

  let result = true;

  for(let i = 0; i<collection.length; i++){
    if(collection[i][pre]){
    }else{
      result = false;
      return result;
    }
  }
  return result;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));