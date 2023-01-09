import { useState, useEffect } from "react";


export const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComment().then((comments) => {
            res.data.comments
        })
    })
}