import { useState } from "react";
import { deleteComment } from "../api";



export const RemoveComment = ({ comment, setComments }) => {
    const [error, setError] = useState(false);
    const deletedComments = [];



    const handleClick = (e) => {
        e.preventDefault();
        setError(false);

        setComments((currComments) => {
            const updatedComments = [...currComments];
            deletedComments.push({comment_id: comment.comment_id,
                     body: comment.body});
            return updatedComments.filter((comm) => comm.comment_id !== comment.comment_id);
            
        })

        deleteComment(comment.comment_id).then(() => {
            alert('Comment deleted succesfully.');
        }).catch(() => {
            setError(true);
            setComments((currComments) => {
                const updatedComments = [...currComments];
                return deletedComments.concat(updatedComments);
            });
        }
        );
    };
       
    if (error) {return <p> Error, the deletion was not successful </p>};

    

    return <button onClick={handleClick}> Delete </button>
       
};