import { createMachine } from 'xstate';

const initialization = createMachine(
    {
        id: 'initialization',
        initial: 'init_step1',
        states: {
            init_step1: {
                after: {
                    2000: 'init_step2',
                },
            },

            init_step2: {
                after: {
                    2000: 'complete',
                },
            },

            complete: {
                type: 'final',
            },
        },
    },
);

export default initialization;
