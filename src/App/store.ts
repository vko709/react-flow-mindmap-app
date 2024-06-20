import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
  XYPosition,
} from 'reactflow';
import create from 'zustand';
import { nanoid } from 'nanoid/non-secure';

import { NodeData } from './MindMapNode';

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  updateNodeLabel: (nodeId: string, label: string) => void;
  addChildNode: (parentNode: Node, position: XYPosition) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes : [
    {
      id: 'root',
      type: 'mindmap',
      data: { label: 'Web Development' },
      position: { x: 0, y: 0 },
          },
    {
      id: '1',
      type: 'mindmap',
      data: { label: 'HTML' },
      position: { x: -100, y: -100 },
      parentId: 'root',
    },
    {
      id: '1-1',
      type: 'mindmap',
      data: { label: 'Basics' },
      position: { x: -150, y: -50 },
      parentId: '1',
    },
    {
      id: '1-2',
      type: 'mindmap',
      data: { label: 'Advanced' },
      position: { x: -50, y: -50 },
      parentId: '1',
    },
    {
      id: '2',
      type: 'mindmap',
      data: { label: 'CSS' },
      position: { x: 100, y: -100 },
      parentId: 'root',
    },
    {
      id: '2-1',
      type: 'mindmap',
      data: { label: 'Basics' },
      position: { x: 50, y: -50 },
      parentId: '2',
    },
    {
      id: '2-2',
      type: 'mindmap',
      data: { label: 'Advanced' },
      position: { x: 150, y: -50 },
      parentId: '2',
    },
    {
      id: '3',
      type: 'mindmap',
      data: { label: 'JavaScript' },
      position: { x: -100, y: 100 },
      parentId: 'root',
    },
    {
      id: '3-1',
      type: 'mindmap',
      data: { label: 'Basics' },
      position: { x: -150, y: 150 },
      parentId: '3',
    },
    {
      id: '3-2',
      type: 'mindmap',
      data: { label: 'Advanced' },
      position: { x: -50, y: 150 },
      parentId: '3',
    },
    {
      id: '4',
      type: 'mindmap',
      data: { label: 'Front-End Frameworks' },
      position: { x: 100, y: 100 },
      parentId: 'root',
    },
    {
      id: '4-1',
      type: 'mindmap',
      data: { label: 'React' },
      position: { x: 50, y: 150 },
      parentId: '4',
    },
    {
      id: '4-2',
      type: 'mindmap',
      data: { label: 'Angular' },
      position: { x: 150, y: 150 },
      parentId: '4',
    },
    {
      id: '5',
      type: 'mindmap',
      data: { label: 'Back-End Development' },
      position: { x: -200, y: 200 },
      parentId: 'root',
    },
    {
      id: '5-1',
      type: 'mindmap',
      data: { label: 'Node.js' },
      position: { x: -250, y: 250 },
      parentId: '5',
    },
    {
      id: '5-2',
      type: 'mindmap',
      data: { label: 'Express' },
      position: { x: -150, y: 250 },
      parentId: '5',
    },
    {
      id: '6',
      type: 'mindmap',
      data: { label: 'Databases' },
      position: { x: 200, y: 200 },
      parentId: 'root',
    },
    {
      id: '6-1',
      type: 'mindmap',
      data: { label: 'SQL' },
      position: { x: 150, y: 250 },
      parentId: '6',
    },
    {
      id: '6-2',
      type: 'mindmap',
      data: { label: 'NoSQL' },
      position: { x: 250, y: 250 },
      parentId: '6',
    },
    {
      id: '7',
      type: 'mindmap',
      data: { label: 'Version Control' },
      position: { x: -300, y: -100 },
      parentId: 'root',
    },
    {
      id: '7-1',
      type: 'mindmap',
      data: { label: 'Git' },
      position: { x: -350, y: -50 },
      parentId: '7',
    },
    {
      id: '7-2',
      type: 'mindmap',
      data: { label: 'GitHub' },
      position: { x: -250, y: -50 },
      parentId: '7',
    },
    {
      id: '8',
      type: 'mindmap',
      data: { label: 'Deployment' },
      position: { x: 300, y: -100 },
      parentId: 'root',
    },
    {
      id: '8-1',
      type: 'mindmap',
      data: { label: 'Netlify' },
      position: { x: 250, y: -50 },
      parentId: '8',
    },
    {
      id: '8-2',
      type: 'mindmap',
      data: { label: 'Vercel' },
      position: { x: 350, y: -50 },
      parentId: '8',
    },
    {
      id: '9',
      type: 'mindmap',
      data: { label: 'Best Practices' },
      position: { x: 300, y: 100 },
      parentId: 'root',
    },
    {
      id: '9-1',
      type: 'mindmap',
      data: { label: 'Code Review' },
      position: { x: 250, y: 150 },
      parentId: '9',
    },
    {
      id: '9-2',
      type: 'mindmap',
      data: { label: 'Testing' },
      position: { x: 350, y: 150 },
      parentId: '9',
    },
  ],
  
  edges : [
    { id: 'r-1', source: 'root', target: '1' },
    { id: '1-1', source: '1', target: '1-1' },
    { id: '1-2', source: '1', target: '1-2' },
    { id: 'r-2', source: 'root', target: '2' },
    { id: '2-1', source: '2', target: '2-1' },
    { id: '2-2', source: '2', target: '2-2' },
    { id: 'r-3', source: 'root', target: '3' },
    { id: '3-1', source: '3', target: '3-1' },
    { id: '3-2', source: '3', target: '3-2' },
    { id: 'r-4', source: 'root', target: '4' },
    { id: '4-1', source: '4', target: '4-1' },
    { id: '4-2', source: '4', target: '4-2' },
    { id: 'r-5', source: 'root', target: '5' },
    { id: '5-1', source: '5', target: '5-1' },
    { id: '5-2', source: '5', target: '5-2' },
    { id: 'r-6', source: 'root', target: '6' },
    { id: '6-1', source: '6', target: '6-1' },
    { id: '6-2', source: '6', target: '6-2' },
    { id: 'r-7', source: 'root', target: '7' },
    { id: '7-1', source: '7', target: '7-1' },
    { id: '7-2', source: '7', target: '7-2' },
    { id: 'r-8', source: 'root', target: '8' },
    { id: '8-1', source: '8', target: '8-1' },
    { id: '8-2', source: '8', target: '8-2' },
    { id: 'r-9', source: 'root', target: '9' },
    { id: '9-1', source: '9', target: '9-1' },
    { id: '9-2', source: '9', target: '9-2' },
  ],
  
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  updateNodeLabel: (nodeId: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, label };
        }

        return node;
      }),
    });
  },
  addChildNode: (parentNode: Node, position: XYPosition) => {
    const newNode = {
      id: nanoid(),
      type: 'mindmap',
      data: { label: 'New Node' },
      position,
      dragHandle: '.dragHandle',
      parentNode: parentNode.id,
    };

    const newEdge = {
      id: nanoid(),
      source: parentNode.id,
      target: newNode.id,
    };

    set({
      nodes: [...get().nodes, newNode],
      edges: [...get().edges, newEdge],
    });
  },
}));

export default useStore;
