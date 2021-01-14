import React from 'react';
import CreatePage from 'dep-mobile/dist/parser/CreatePage';

const EventHandler = {
  page: {
    onViewDidMount() {
      const moduleGrid = this.findUI('moduleGrid');
      const todoTableView = this.findUI('todoTableView');
      console.log('moduleGrid', moduleGrid);
      todoTableView.data = [
        {
          text: '罐车待签收',
        },
        {
          text: 'I级硅酸盐水泥-42.5 库存不足',
          brief1: function renderBrief1() {
            return <span style={{ color: 'red' }}>简要信息</span>;
          },
          brief2: function brief2() {
            return <span style={{ color: 'blue' }}>简要信息</span>;
          },
        },
        {
          text: '浇筑-202010010001会签',
        },
        {
          text: '浇筑-202010010002填报配合比',
        },
      ];
      this.refresh();
    },
  },
  moduleStore: {
    onClick() {
      console.log(this.findUI());
    },
  },
  moduleGrid: {
    onClick(el, index) {
      console.log('grid click', el, index);
    },
  },
};

export default function Home(props) {
  return (
    <CreatePage
      {...props}
      appCode="AYY003236"
      pageCode="PYY016020"
      uiEvent={EventHandler}
    />
  );
}
