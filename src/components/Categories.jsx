import { getCategories } from "../api";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getCategories().then((category) => {
            setIsLoading(false)
            setCategories(category);
        })
    }, [])

    if (isLoading) return <p> Loading... </p> 

    return <section className="Categories"> <br/>
        {categories.map((category) => <section className="Category" key={category.slug}>
            <Link to={`/?category=${category.slug}`} >
            <strong>{category.slug}</strong> <br/>
            {category.description}<br/><br/>
            </Link></section> )}
    </section>
}