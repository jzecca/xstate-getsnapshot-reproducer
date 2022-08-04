import { useChildMachine } from '../hooks/useMachine';
import { useSelector } from '@xstate/react';

function Initialization() {
    const initialization = useChildMachine('initialization');
    const current = useSelector(initialization, state => state.value.toString());

    return (
        <>
            <h2>Initialization...</h2>
            <p>
                Child state:
                &nbsp;&nbsp;
                <code>{current}</code>
            </p>
        </>
    );
}

export default Initialization;
