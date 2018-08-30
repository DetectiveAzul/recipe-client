export function trimAndCapitalise(data){
  return data.replace(/\b\w/g, l => l.toUpperCase()).trim()
}

// export function trimUnwantedDecimals(data){
//   if(data.)
// }

export function prettyTime(time){
  const s1 = time.split(':')
  const newArray = [];
  if(s1[0] !== '00' && s1[0] !== '01'){
    newArray.push(s1[0].concat(' hrs '))
  } else if(s1[0] !== '00') {
    newArray.push(s1[0].concat(' hr '))
  }
  if(s1[1] !== '00' && s1[1] !== '01'){
    newArray.push(s1[1].concat(' mins'))
  } else if(s1[1] !== '00'){
    newArray.push(s1[1].concat(' min'))
  }
  return newArray
}
