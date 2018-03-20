function toLowerCase(things){

  // testing string
  if(typeof things === 'string'){
   return things.toLowerCase();
  }

  // testing array
  if(Array.isArray(things)){
    var lowercase = []
    var notLowercase = []
    things.forEach((thing,index)=>{
      if(typeof thing === 'string'){
        lowercase.push(thing.toLowerCase())
      } else {
        notLowercase.push(thing)
      }
    })
    return lowercase.concat(notLowercase)
  }

  // testing object
  if((typeof things === "object") && (things !== null) && (!Array.isArray(things))){
    var stuffObject = {}
    for(let thing in things){
      if(typeof things[thing] === 'string'){
        stuffObject[thing] = things[thing].toLowerCase()
      } else {
        stuffObject[thing] = things[thing]
      }
    }
    return stuffObject
  }
}

module.exports = toLowerCase
