import { useSelector, useDispatch } from 'react-redux';
import { carActions } from '../store/cars';
import { Card, Button } from 'react-bootstrap';
import { BsBag } from "react-icons/bs";
import style from '../components/Styles.module.css';

export default function FindCar() {

    const model = useSelector(state => state.car.findCar);
    const car = model[0];

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(carActions.setShowFindFalse());
    };

    const handleAddToCart = car => {
        dispatch(carActions.addToCart(car));
        dispatch(carActions.setShowCart());
        dispatch(carActions.getTotals());
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
                            onClick={() => handleAddToCart(car)}
                        >
                                <BsBag />
                        </Button>
                    </div>
                    <Card.Title className={style.float_left}>{car.manufacturer.name}{' '}{car.name}</Card.Title>
                    <Card.Title className={style.float_right}>Price:{car.price}</Card.Title>
                    <Card.Img src={'/assets/img/' + car.image} alt={car.name} />
                    <div className={style.float_left}>
                        <Card.Text>
                            <strong>Engine: </strong>{car.engine}
                        </Card.Text>
                        <Card.Text>
                            <strong>Power: </strong>{car.power}
                        </Card.Text>
                        <Card.Text>
                            <strong>Weight: </strong>{car.weight}
                        </Card.Text>
                    </div>
                    <div className={style.float_right}>
                        <Card.Text>
                            <strong>Number of cylinders: </strong>{car.cylinders}
                        </Card.Text>
                        <Card.Text>
                            <strong>Max speed: </strong>{car.maxSpeed}
                        </Card.Text>
                        <Card.Text>
                            <strong>Typology: </strong>{car.typology}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
} 