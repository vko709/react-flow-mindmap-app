import { useLayoutEffect, useEffect, useRef } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

import useStore from '../store';

import DragIcon from './DragIcon';

export type NodeData = {
  label: string;
};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const updateNodeLabel:any = useStore((state) => state.updateNodeLabel);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 1);
  }, []);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${data.label.length * 8}px`;
    }
    if(id === 'root'){
      const targetElement = inputRef.current?.parentElement?.nextSibling?.nextSibling;
      if (targetElement && targetElement instanceof HTMLElement) {
        targetElement.style.color = 'red'; // Example: Change text color to red
        targetElement.style.backgroundColor = 'green'; // Example: Change background color to yellow  
      }
    }
    else if(id.length === 1){
      const targetElement = inputRef.current?.parentElement?.nextSibling?.nextSibling;
      if (targetElement && targetElement instanceof HTMLElement) {
        targetElement.style.color = 'red'; // Example: Change text color to red
        targetElement.style.backgroundColor = 'pink'; // Example: Change background color to yellow  
      }
    }
      }, [data.label.length]);

  return (
    <>
      <div className="inputWrapper">
        <div className="dragHandle">
          <DragIcon />
        </div>
        <input
          value={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          className="input"
          ref={inputRef}
        />
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Top} />
    </>
  );
}

export default MindMapNode;
