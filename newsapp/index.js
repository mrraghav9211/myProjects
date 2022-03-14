const do_something = function(response){
    return response.json();
}
const handle_data = function(res){
    const user_arr = res.articles;
    const main_container = document.getElementById('card_container')
    for(let i=0; i<user_arr.length; i +=1){
        const api_data = user_arr[i];
         const  new_img = document.createElement('img')
        //  new_img.innerHTML = " ";
        const new_div = document.createElement('div')
         const new_h4 = document.createElement('h4')
         const new_p = document.createElement('p')
         const new_p1 = document.createElement('p')
         const new_btn = document.createElement('button')
         const new_a = document.createElement('a')
         new_img.src = api_data.urlToImage;
         new_h4.innerText = api_data.title;
         new_p.innerText = api_data.description;
         new_p1.innerText = api_data.publishedAt;
         new_a.href = api_data.url;
         new_a.target = 'blank'
         new_a.innerText = 'Read More';
         new_p1.id = "p2"
         new_div.id = 'card'
         new_div.appendChild(new_img);
         new_div.appendChild(new_h4);
         new_div.appendChild(new_p)
         new_div.appendChild(new_p1);
         new_btn.appendChild(new_a)
         new_div.appendChild(new_btn) 
         main_container.appendChild(new_div);
      

    }
}
fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=44d45ac3ee5d4b25b8eb120b529aad73").then(do_something).then(handle_data);