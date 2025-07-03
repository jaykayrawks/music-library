 export function groupBy(data, key:string) {
 
 return data.reduce((acc,song)=>{
         if(acc[song[key]]){
           acc[song[key]].push(song);
         }
         else{
           acc[song[key]]=[song];
         }
       return acc;
       },{});
}

export function sortBy(data, key:string) {
    const list={};
  Object.keys(data).forEach(v=>{
        list[v] = data[v].sort(
            (a,b)=>{
                return a[key].localeCompare(b[key])
  })
      },{});
      return list;
}