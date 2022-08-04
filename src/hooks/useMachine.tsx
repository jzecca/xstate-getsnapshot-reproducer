import { createContext, PropsWithChildren, useContext } from 'react';
import { useInterpret, useSelector } from '@xstate/react';
import main, { MainInterpreter } from '../machines/main';

const Context = createContext({} as MainInterpreter);

export function MachineProvider({ children }: PropsWithChildren) {
    const machine = useInterpret(main);

    return (
        <Context.Provider value={machine}>
            {children}
        </Context.Provider>
    );
}

export function useMachine() {
    return useContext(Context);
}

/**
 * First call to this hook triggers the following error:
 * "Warning: The result of getSnapshot should be cached to avoid an infinite loop"
 *
 * https://github.com/statelyai/xstate/discussions/3379
 */
export function useChildMachine(id: string) {
    const machine = useContext(Context);

    return useSelector(machine, state => state.children[id]);
}
