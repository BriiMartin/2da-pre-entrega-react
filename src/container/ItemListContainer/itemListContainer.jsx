import { useEffect, useState } from "react";

const ItemListContainer = ( categoria ) => {
    const [products, setProducts] = useState ([])
    
    console.log(categoria)
    
    useEffect(() => {

        if(categoria === 'todos') {
        fetch('https://fakestoreapi.com/products')
         .then(res=>res.json())
         .then(json=> setProducts(json))
         .catch(e => console.error (e)) 
        }else {
        fetch(`https://fakestoreapi.com/products/category/${categoria}`)
         .then(res=>res.json())
         .then(json=> setProducts(json))
         .catch(e => console.error (e)) 
        }
    
    }, [categoria] )
    
    return (
        <div>
            {products.map((product) => <p key={product.id}> {product.title} </p>)}
        </div>
    );
};


export default ItemListContainer;