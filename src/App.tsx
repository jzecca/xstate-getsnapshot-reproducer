import { useMachine } from './hooks/useMachine';
import { useSelector } from '@xstate/react';
import pages from './pages';

function App() {
    const main = useMachine();
    const current = useSelector(main, state => state.value.toString());

    const CurrentPage = pages[current];

    return (
        <CurrentPage />
    );
}

export default App
