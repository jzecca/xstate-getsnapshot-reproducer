import { useChildMachine } from '../hooks/useMachine';
import { useSelector } from '@xstate/react';

function Authentication() {
    const authentication = useChildMachine('authentication');
    const current = useSelector(authentication, state => state.value.toString());

    return (
        <>
            <h2>Authentication...</h2>
            <p>
                Child state:
                &nbsp;&nbsp;
                <code>{current}</code>
            </p>
        </>
    );
}

export default Authentication;
