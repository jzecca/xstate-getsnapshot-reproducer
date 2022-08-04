import { createMachine } from 'xstate';

const authentication = createMachine(
    {
        id: 'authentication',
        initial: 'auth_step1',
        states: {
            auth_step1: {
                after: {
                    2000: 'auth_step2',
                },
            },

            auth_step2: {
                after: {
                    2000: 'auth_step3',
                },
            },

            auth_step3: {
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

export default authentication;
