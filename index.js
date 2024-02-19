function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400) {
     result = 'This one is on me!';
  } else if (feet <=2000) {
    result = 'That will be twenty bucks.';
  } else if (feet <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
    }

    return result;

  }




function ternaryCheckCity(city){
  
  let cityStatus
  cityStatus = city === `NYC` ? "Ok, sounds good." :"No go.";

  return cityStatus;
}

function switchOnCharmFromTip(amount){
  
  let tipResponse;
  
  switch (amount) {
    case amount = 'generous':
      tipResponse = `Thank you so much.`;
      break;
    case amount = 'not as generous':
      tipResponse = `Thank you.`;
      break;
    default:
      tipResponse = `Bye.`;
      break;

  }

  return tipResponse;
}