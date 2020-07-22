import React from "react";
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs";
import Weather from "./frontend/weather";
import Autocomplete from "./frontend/autocomplete";

function Root(props) {
  const tabData = [
    {
      title: "One",
      content: "I am one",
    },
    {
      title: "Two",
      content: "I am two",
    },
    {
      title: "Three",
      content: "I am three",
    },
  ];

  const names = [
    "Fares",
    "Andrew",
    "Vanessa",
    "Steve",
    "Sophie",
    "Kevin",
    "Victoria",
  ];
  return (
    <div>
      <Clock />
      <Weather />
      <Autocomplete names={names}/>
      <Tabs tabSections={tabData} />
    </div>
  );
}

export default Root;


import React from 'react';

const Header = ({ title, idx, callback }) => (
  <h1 idx={idx}
    onClick={(e) => {
      e.preventDefault();
      callback(parseInt(e.currentTarget.getAttribute("idx")));
    }}
  >{title}
  </h1>
);

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabIdx: 0
    };

    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(nextTabIdx) {
    this.setState({ selectedTabIdx: nextTabIdx })
  }

  render() {
    let { items } = this.props;
    // item { title, content }
    return (
      <div>
        <h1>Tabs</h1>
        <ul>
          {
            items.map((item, idx) => (
              <Header title={item.title} idx={idx} callback={this.setSelectedTab} />
            ))
          }
        </ul>
        <article>{items[this.state.selectedTabIdx].content}</article>
      </div>
    );
  }
}