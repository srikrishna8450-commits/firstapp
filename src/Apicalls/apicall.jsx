function data(){
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
.then(console.log(data));

}

export default data