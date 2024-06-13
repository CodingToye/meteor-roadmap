export interface Section {
  title: string;
  description: string;
  showBlocks: boolean;
  blocks: Block[];
  codeSample?: string;
}

export interface Block {
  title: string;
  description?: string | undefined;
  meta?: string;
  subBlocks?: SubBlockType[];
  notes?: string;
  codeSample?: string;
}

export interface SubBlockType {
  title: string;
  description?: string;
  tip?: boolean;
  tools?: Tools[];
  codeSample?: string;
  meta?: string;
  notes?: string;
}

export interface Tools {
  tool: string;
}

export interface GoalType {
  goal: string;
  target: string | number;
  current: string | number;
  unit?: string;
}

export interface TestType {
  x: string;
}
