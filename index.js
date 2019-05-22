function scuberGreetingForFeet(someValue){
  // Write your code here!
  let ride
  if (someValue <= 400) {
    ride = 'This one is on me!';
  }
  else if (someValue > 2000 && someValue <= 2500) {
    ride = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    ride = 'No can do.'
  }
  return ride
}

function ternaryCheckCity(destination){
  // Write your code here!
  let response;
  destination === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response
}
