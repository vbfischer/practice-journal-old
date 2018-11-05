import React from 'react';

export const SidebarStateContext = React.createContext({
  opened: true
});

export class SidebarStateProvider extends React.Component {
  state = {
    opened: true,
    toggleSidebarState: () => {}
  };

  toggleSidebarState = () => {
    this.setState({
      opened: !this.state.opened
    });
  };

  render() {
    const { children } = this.props;
    return (
      <SidebarStateContext.Provider
        value={{
          opened: this.state.opened,
          toggleSidebarState: this.toggleSidebarState
        }}
      >
        {children}
      </SidebarStateContext.Provider>
    );
  }
}

export const SidebarStateConsumer = SidebarStateContext.Consumer;
