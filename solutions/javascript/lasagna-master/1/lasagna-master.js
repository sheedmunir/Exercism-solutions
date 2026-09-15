

export function cookingStatus(remainingTime){
  if(remainingTime === 0){
    return 'Lasagna is done.';
  }
  else if (remainingTime > 0){
    return 'Not done, please wait.';
  }
  else{
    return 'You forgot to set the timer.';
  }
  
}



export function preparationTime(layers,time){

  const numOfLayers = layers.length;
  if(time == null){
    return numOfLayers * 2;
    
  }else{
    return numOfLayers * time;
  }

}

export function quantities(layers){

  let totalNoodles = 0;
  let totalsauce = 0;
  
  layers.forEach((key) => {

    if (key === 'noodles' ){
      totalNoodles += 50;
    }
    else if(key === 'sauce' ){
      totalsauce += 0.2;
    }
    else{}
    
      })

  return {
    noodles: totalNoodles,
    sauce: totalsauce
        }
  
} 


export function addSecretIngredient(friendsList,myList){

  const lastItem = friendsList.length - 1 ;
  myList.push(friendsList[lastItem]);
  
}

export function scaleRecipe(recipeObj,portions){

  
  const eachPortion = Number(portions) /2;

  const newObj = {};

  for(let key in recipeObj){

    newObj[key] = recipeObj[key] * eachPortion 
    
  }

  return newObj;
  
  


  

  
}










