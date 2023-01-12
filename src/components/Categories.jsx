import { getCategories } from "../api";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
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

    if (isLoading) return <Loading />

    return <section className="Categories"> <br/>
        {categories.map((category) => <section className="Category" key={category.slug}>
            <Link to={`/?category=${category.slug}`} >
            <strong>{category.slug}</strong> <br/>
            {category.description}<br/><br/>
            </Link></section> )}
    </section>
}