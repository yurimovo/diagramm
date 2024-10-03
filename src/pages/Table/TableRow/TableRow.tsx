import React from "react";

import './style.scss';

interface TableRowProps {
  name: string;
  today: string;
  yesterday: string;
  thisWeek: string;
  onSelect: () => void;
};

const TableRow: React.FC<TableRowProps> = ({ name, today, yesterday, thisWeek, onSelect }) => {
  return (
    <div className="diagram-row" onClick={onSelect}>
      <div className="diagram-row__name">{name}</div>
      <div className="diagram-row__today">{today}</div>
      <div className="diagram-row__yesterday">{yesterday}</div>
      <div className="diagram-row__this-week">{thisWeek}</div>
    </div>
  );
};

export default TableRow;