import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../service/types";
import * as action from "../service/action"

type LocalProps = {
    name: string
}

const SampleComponent: React.FunctionComponent<LocalProps> = (props) => {
    const counter = useSelector<State, number>(state => state.clickCount);
    const dispatch = useDispatch();

    const onClick = () => dispatch(action.click());

    return (
        <div>
            <p>{props.name}</p>
            <button type="button" onClick={onClick}>Click</button>
            <p>Click count: {counter}</p>
        </div>
    )
};

export default SampleComponent;