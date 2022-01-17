import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';
import NbosSubTextTopLabel from '../atoms/NbosSubTextTopLabel';
import format from 'date-fns/format';

export default function NbosUserInfoTemplate({ userInfo }) {
  const formattedDate =
    userInfo.hireDate !== ''
      ? format(new Date(userInfo.hireDate), 'yyyy/MM/dd')
      : '';
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-rows-4 tw-items-center tw-w-[19rem] tw-mx-3 tw-py-8">
        <div className="">
          <Avatar
            size={85}
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </div>
        <NbosSubTextTopLabel
          bottomLabel={userInfo.userName}
          subTextLabel="Name"
        />
        <NbosSubTextTopLabel
          bottomLabel={formattedDate}
          // bottomLabel={userInfo.hireDate}
          subTextLabel="Hire Date"
        />
        <NbosSubTextTopLabel bottomLabel={userInfo.role} subTextLabel="Role" />
        <NbosSubTextTopLabel
          bottomLabel={userInfo.teamLead}
          subTextLabel="Team Lead"
        />
      </div>
    </NbosSurfaceCard>
  );
}
