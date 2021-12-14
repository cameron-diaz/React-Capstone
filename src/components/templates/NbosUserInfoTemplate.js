import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';
import NbosSubTextTopLabel from '../atoms/NbosSubTextTopLabel';

export default function NbosUserInfoTemplate() {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-rows-4 tw-items-center tw-w-[17rem] tw-mx-3">
        <div className="tw-py-2">
          <Avatar
            size={85}
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </div>
        <NbosSubTextTopLabel bottomLabel="Patrick Barnes" subTextLabel="Name" />
        <NbosSubTextTopLabel
          bottomLabel="10/10/2017"
          subTextLabel="Hire Date"
        />
        <NbosSubTextTopLabel
          bottomLabel="Commercial RM II"
          subTextLabel="Role"
        />
        <NbosSubTextTopLabel
          bottomLabel="John Smith"
          subTextLabel="Team Lead"
        />
      </div>
    </NbosSurfaceCard>
  );
}
