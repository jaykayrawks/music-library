 export function groupBy(data, key) {
 
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
        list[v] = data[v].sort((a,b)=>a[key].charCodeAt(0)-b[key].charCodeAt(0))
      },{});
      return list;
}