import classes from "./Card.module.css";

interface iCard {
    children? :React.ReactNode;
}

const Card: React.FC<iCard> = ({children}) => {
    return (
        <div className={classes.card}>{children}</div>
    );
}

export default Card;

