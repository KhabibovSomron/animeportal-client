import { FC } from 'react';
import './CommentCard.css'
interface ICommentCardProps {
    name: string,
    text: string
}

const CommentCard: FC<ICommentCardProps> = ({name, text}) => {
    return (
        <div className="media mt-5 editContent body-padding-1">
            <div className="media-body body-comment">
                <h5 className="mt-0 editContent">{ name }</h5>
                <p className="mt-2 editContent">{ text }</p>
            </div>
        </div>
    );
};

export default CommentCard;
