import React, { useEffect, useState } from 'react';
import "./RightSide.css";
import Product from './Product';
import { Link } from 'react-router-dom';

function RightSidePanel(props) {
    
    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            { id: 123456543, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/qlvn21igb/project-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__P-5XTEwjL.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659193048083"},
            { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/qlvn21igb/project-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__CUGVgYz3w.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659193048280"},
            { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/qlvn21igb/project-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__N8NKY9NaZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659193044377"},
            { id: 12344545456543, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/qlvn21igb/project-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__z-sqIaBT6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659193046130"},
            { id: 123465656543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/qlvn21igb/project-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__CUGVgYz3w.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659193048280"},
            { id: 2356346363, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/qlvn21igb/project-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65__nkwK38z4M.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659193048946"}
    
        ]
        
        setListOfProducts(list);
    },[]);

    return (
        <div className="RightSide__main">
            {/* <Product rating="234444" price="21342" name="iphone 11" image="https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578" />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}

            {   
                listOfProduct.map ( (item) =>(
                    <Link to={`/order/`+item.id } >
                        <Product definition={item} />
                    </Link>
                ))
            }

        </div>
    );
}

export default RightSidePanel;