
const do_somthing = function(response){
    return response.json();
}

const handle_search = function(res){
    const user_arr = res.data;
    console.log(user_arr)
    const container = document.getElementById('img_container');
    container.innerHTML= "";
    for(let i =0; i<user_arr.length; i +=1){
    const single_user = user_arr[i];
    const new_img = document.createElement('img');
    new_img.src = single_user.images.original.url;
    container.appendChild(new_img);
    
    }
}
const api_key =  "issqubTqVOuu27V1w8DgDJGxAD79hDmF";
const limit = 10;
const search_fn = function(){
    const input = document.getElementById('input_field')
    const user_id = input.value;
    input.value = ""
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${user_id}&limit=${limit}&offset=0&rating=g&lang=en`)
    .then(do_somthing)
    .then(handle_search);
}
const search_btn = document.getElementById('search_btn')
search_btn.addEventListener('click',search_fn);



