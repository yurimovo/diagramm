import React, { useState } from 'react';
import TableRow from './TableRow/TableRow';
import LineChart from './LineChart/LineChart';

import './style.scss';

interface RevenueData {
  revDate: string;
  rev: number;
}

interface TableDataItem {
  name: string;
  revenue: RevenueData[];
  today: string;
  yesterday: string;
  thisWeek: string;
}

const tableData: TableDataItem[] = [
  {
    name: 'Выручка, руб.',
    revenue: [
      { revDate: '01.01.2022', rev: 1000 },
      { revDate: '02.01.2022', rev: 1200 },
      { revDate: '03.01.2022', rev: 1130 },
      { revDate: '04.01.2022', rev: 2500 },
      { revDate: '05.01.2022', rev: 1600 },
    ],
    today: '1200',
    yesterday: '1000',
    thisWeek: '7430',
  },
  {
    name: 'Наличный расчет',
    revenue: [
      { revDate: '01.01.2022', rev: 200 },
      { revDate: '02.01.2022', rev: 400 },
      { revDate: '03.01.2022', rev: 600 },
      { revDate: '04.01.2022', rev: 1100 },
      { revDate: '05.01.2022', rev: 800 },
    ],
    today: '400',
    yesterday: '200',
    thisWeek: '3100',
  },
  {
    name: 'Безналичный расчет',
    revenue: [
      { revDate: '01.01.2022', rev: 500 },
      { revDate: '02.01.2022', rev: 200 },
      { revDate: '03.01.2022', rev: 300 },
      { revDate: '04.01.2022', rev: 800 },
      { revDate: '05.01.2022', rev: 400 },
    ],
    today: '200',
    yesterday: '500',
    thisWeek: '2200',
  },
  {
    name: 'Кредитные карты',
    revenue: [
      { revDate: '01.01.2022', rev: 300 },
      { revDate: '02.01.2022', rev: 600 },
      { revDate: '03.01.2022', rev: 230 },
      { revDate: '04.01.2022', rev: 600 },
      { revDate: '05.01.2022', rev: 400 },
    ],
    today: '600',
    yesterday: '300',
    thisWeek: '2130',
  },
  {
    name: 'Средний чек, руб.',
    revenue: [
      { revDate: '01.01.2022', rev: 1800 },
      { revDate: '02.01.2022', rev: 1700 },
      { revDate: '03.01.2022', rev: 1900 },
      { revDate: '04.01.2022', rev: 2500 },
      { revDate: '05.01.2022', rev: 1600 },
    ],
    today: '1700',
    yesterday: '1800',
    thisWeek: '9500',
  },
  {
    name: 'Средний гость, руб.',
    revenue: [
      { revDate: '01.01.2022', rev: 900 },
      { revDate: '02.01.2022', rev: 1150 },
      { revDate: '03.01.2022', rev: 1330 },
      { revDate: '04.01.2022', rev: 2000 },
      { revDate: '05.01.2022', rev: 1440 },
    ],
    today: '1150',
    yesterday: '900',
    thisWeek: '6820',
  },
  {
    name: 'Удаления из чека после оплаты',
    revenue: [
      { revDate: '01.01.2022', rev: 100 },
      { revDate: '02.01.2022', rev: 120 },
      { revDate: '03.01.2022', rev: 113 },
      { revDate: '04.01.2022', rev: 250 },
      { revDate: '05.01.2022', rev: 160 },
    ],
    today: '120',
    yesterday: '100',
    thisWeek: '743',
  },
  {
    name: 'Удаления из чека до оплаты',
    revenue: [
      { revDate: '01.01.2022', rev: 80 },
      { revDate: '02.01.2022', rev: 110 },
      { revDate: '03.01.2022', rev: 130 },
      { revDate: '04.01.2022', rev: 75 },
      { revDate: '05.01.2022', rev: 160 },
    ],
    today: '110',
    yesterday: '80',
    thisWeek: '730',
  },
  {
    name: 'Количество чеков',
    revenue: [
      { revDate: '01.01.2022', rev: 5 },
      { revDate: '02.01.2022', rev: 7 },
      { revDate: '03.01.2022', rev: 3 },
      { revDate: '04.01.2022', rev: 4 },
      { revDate: '05.01.2022', rev: 8 },
    ],
    today: '7',
    yesterday: '5',
    thisWeek: '19',
  },
  {
    name: 'Количество гостей',
    revenue: [
      { revDate: '01.01.2022', rev: 5 },
      { revDate: '02.01.2022', rev: 7 },
      { revDate: '03.01.2022', rev: 4 },
      { revDate: '04.01.2022', rev: 3 },
      { revDate: '05.01.2022', rev: 8 },
    ],
    today: '7',
    yesterday: '5',
    thisWeek: '15',
  }
]

const Table: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedRevenue, setSelectedRevenue] = useState<RevenueData[] | null>(null);

  const handleRowClick = (index: number, revenue: RevenueData[]) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelectedRevenue(null);
    } else {
      setSelectedIndex(index);
      setSelectedRevenue(revenue);
    }
  };

  return (
    <div className='table'>
      <div className='table__header'>
        <div className='table__header__name'>Показатель</div>
        <div className='table__header__today'>Текущий день</div>
        <div className='table__header__yesterday'>Вчера</div>
        <div className='table__header__this-week'>Этот день недели</div>
      </div>
      <div className='table__body'>
        {tableData.map((item, index) => (
          <React.Fragment key={index}>
            <TableRow 
              name={item.name} 
              today={item.today} 
              yesterday={item.yesterday} 
              thisWeek={item.thisWeek} 
              onSelect={() => handleRowClick(index, item.revenue)}
            />
            
            {selectedIndex === index && selectedRevenue && (
              <tr>
                <td colSpan={4}>
                  <LineChart data={selectedRevenue} />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Table;
