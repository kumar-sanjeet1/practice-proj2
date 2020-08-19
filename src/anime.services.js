


export const searchAnimie = (query, page, update) => {
     fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${page||1}`)
         .then(res => res.json())
         .then(data => {
             console.log(data);
             update(data.results)
         })

     console.log('do validate', page);
}