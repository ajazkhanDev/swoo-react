import { useDispatch, useSelector } from 'react-redux';
import Box, { BoxChild, ButtonStyle, CounterText } from '../components/Box';
import { actions } from '../redux/reducers/index';
import store from '../redux/store';
type RootState = ReturnType<typeof store.getState>;
export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (

        <Box>
            <BoxChild>
                <ButtonStyle onClick={() => dispatch(actions.increment())}>{"+1"}</ButtonStyle>
                <CounterText>{count}</CounterText>
                <ButtonStyle onClick={() => dispatch(actions.decrement())}>{"-1"}</ButtonStyle>
            </BoxChild>
        </Box>
    );
}