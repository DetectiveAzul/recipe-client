export function trimAndCapitalise(data){
  return data.replace(/\b\w/g, l => l.toUpperCase()).trim()
}

// export function trimUnwantedDecimals(data){
//   if(data.)
// }
