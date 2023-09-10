const display = { display: 'flex' };

const rowBase = {
  ...display,
  flexDirection: 'row',
};

const colBase = {
  ...display,
  flexDirection: 'column',
};

const justifyCenter = {
  justifyContent: 'center',
};
const justifyBetween = {
  justifyContent: 'space-between',
};
const justifyStart = {
  justifyContent: 'start',
};
const justifyEnd = {
  justifyContent: 'end',
};
const alignCenter = {
  alignItems: 'center',
};

export const flex = { rowBase, colBase, justifyCenter, justifyBetween, justifyStart, justifyEnd, alignCenter } as const;
