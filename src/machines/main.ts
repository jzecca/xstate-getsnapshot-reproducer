import { createMachine, InterpreterFrom } from 'xstate';
import authentication from './authentication';
import initialization from './initialization';

const main = createMachine(
    {
        id: 'main',
        initial: 'initialization',
        states: {
            initialization: {
                invoke: {
                    id: 'initialization',
                    src: 'initialization',
                    onDone: 'authentication',
                },
            },

            authentication: {
                invoke: {
                    id: 'authentication',
                    src: 'authentication',
                    onDone: 'complete',
                },
            },

            complete: {
                type: 'final',
            },
        },
    },
    {
        services: {
            authentication,
            initialization,
        },
    },
);

export default main;
export type MainInterpreter = InterpreterFrom<typeof main>;
