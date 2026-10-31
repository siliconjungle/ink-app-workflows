import{commandBridge}from'./.ink-commands/command-bridge.js';
commandBridge({origin:new URLSearchParams(location.search).get('desktopOrigin')||location.origin,handlers:{'run-workflow':input=>globalThis.WorkflowActions.run(input.id,input.inputs||{}),new:()=>globalThis.WorkflowActions.new(),runs:()=>globalThis.WorkflowActions.runs()}});
