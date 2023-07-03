function scuberGreetingForFeet(number){
  if(number <= 400) {
    return 'This one is on me!';
  } else if(number <= 2000 && 'This one is on me!') {
    return 'That will be twenty bucks.'
  } else if(number <=2500 && 'I will gladly take your thirty bucks.') {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip ){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}