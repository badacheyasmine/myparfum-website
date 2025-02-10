async function getProducts(){
    reponse = await fetch("https://dummyjson.com/products")
    list= await reponse.json()
    produits=list.products

    i=0
    oldProducts=document.getElementsByClassName('fils')
    for(pr of oldProducts){
        title=pr.getElementsByTagName('h4')[0]
        title.innerText=produits[i].title

        image=pr.getElementsByTagName('img')[0]
        image.setAttribute('src',produits[i].thumbnail)

        i++
    }

}

getProducts()