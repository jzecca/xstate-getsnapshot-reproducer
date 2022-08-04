# xstate-getsnapshot-reproducer
https://github.com/statelyai/xstate/discussions/3379#discussioncomment-2882267


## Steps to reproduce
- Run `yarn && yarn dev`
- Open the app
- In the console, you'll see that the following error has been thrown:

  ```
  react-dom.development.js:86 Warning: The result of getSnapshot should be cached to avoid an infinite loop
      at Initialization (http://localhost:5173/src/pages/Initialization.tsx:22:26)
      at App (http://localhost:5173/src/App.tsx:22:16)
      at MachineProvider (http://localhost:5173/src/hooks/useMachine.tsx:22:3)
  ```
