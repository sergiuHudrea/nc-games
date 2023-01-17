import { deleteComment } from "../api";


export const RemoveComment = ({ comment, setComments }) => {
    const deletedComments = [];


    const handleClick = (e) => {
        e.preventDefault();

        setComments((currComments) => {
            const updatedComments = [...currComments];
            deletedComments.push({comment_id: comment.comment_id,
                     body: comment.body});
            return updatedComments.filter((comm) => comm.comment_id !== comment.comment_id);
        })

        deleteComment(comment.comment_id)
            .catch(() => {
                setComments((currComments) => {
                    const updatedComments = [...currComments];
                    return deletedComments.concat(updatedComments);
                });
                alert("The comment was not deleted, please refresh.");
        }
        );
    };

    

    return <button onClick={handleClick}> Delete </button>
       
};