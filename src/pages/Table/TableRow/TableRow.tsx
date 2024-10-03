import React from "react";

import './style.scss';

interface TableRowProps {
  name: string;
  today: string;
  yesterday: string;
  percents: number;
  thisWeek: string;
  onSelect: () => void;
};

const TableRow: React.FC<TableRowProps> = ({ name, today, yesterday, percents, thisWeek, onSelect }) => {
  return (
    <div className="diagram-row" onClick={onSelect}>
      <div className="diagram-row__name">{name}</div>
      <div className="diagram-row__today">{today}</div>
      <div 
        className="diagram-row__yesterday"
        style={{ backgroundColor: percents > 0 ? '#ecf7e7' : percents < 0 ? '#fee6e6' : '#f5f5f5' }}
      >
        <div className="diagram-row__yesterday__value">{yesterday}</div>
        <div 
          className="diagram-row__yesterday__percent"
          style={{ color: percents >= 0 ? 'green' : 'red' }}
        >
          {percents + '%'}
        </div>
      </div>
      <div className="diagram-row__this-week">{thisWeek}</div>
    </div>
  );
};

export default TableRow;