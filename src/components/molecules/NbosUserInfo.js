import React from 'react';
import NbosSubTextTopLabel from '../atoms/NbosSubTextTopLabel';
import NbosSurfaceCard from '../atoms/NbosSurfaceCard';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function NbosUserInfo() {
  return (
    <NbosSurfaceCard>
      <div className="tw-grid tw-grid-rows-4">
        <div className="tw-pt-2">
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
          bottomLabel="Patrick Barnes"
          subTextLabel="Team Lead"
        />
      </div>
    </NbosSurfaceCard>
  );
}
