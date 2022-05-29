import { useSelector, useDispatch } from 'react-redux';
import { carActions } from '../store/cars';
import { Card, Button } from 'react-bootstrap';
import { BsBag } from "react-icons/bs";
import style from '../components/Styles.module.css';

export default function FindCar() {

    const model = useSelector(state => state.car.findCar);
    const modelPosition = model[0];

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(carActions.setShowFindFalse());
    };

    const handleAddToCart = car => {
        dispatch(carActions.addToCart(car));
        dispatch(carActions.setShowCart());
    };

    return (
        <div className={style.show}>
            <Card>
                <Card.Body>
                    <div>
                        <Button
                            className={style.close_button}
                            onClick={() => handleClose()}
                        >
                                X
                        </Button>
                    </div>
                    <div>
                        <Button
                            className={style.cart_button}
                            onClick={() => handleAddToCart(modelPosition)}
                        >
                                <BsBag />
                        </Button>
                    </div>
                    <Card.Title className={style.float_left}>{modelPosition.manufacturer.name}{' '}{modelPosition.name}</Card.Title>
                    <Card.Title className={style.float_right}>Price:{modelPosition.price}</Card.Title>
                    <Card.Img src={'/assets/img/' + modelPosition.image} alt={modelPosition.name} />
                    <div className={style.float_left}>
                        <Card.Text>
                            <strong>Engine: </strong>{modelPosition.engine}
                        </Card.Text>
                        <Card.Text>
                            <strong>Power: </strong>{modelPosition.power}
                        </Card.Text>
                        <Card.Text>
                            <strong>Weight: </strong>{modelPosition.weight}
                        </Card.Text>
                    </div>
                    <div className={style.float_right}>
                        <Card.Text>
                            <strong>Number of cylinders: </strong>{modelPosition.cylinders}
                        </Card.Text>
                        <Card.Text>
                            <strong>Max speed: </strong>{modelPosition.maxSpeed}
                        </Card.Text>
                        <Card.Text>
                            <strong>Typology: </strong>{modelPosition.typology}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
} 