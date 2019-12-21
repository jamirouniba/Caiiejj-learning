import React, {Component} from 'react';
import {Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loadUser, logout} from "../../actions/authActions";
import store from '../../store';

const getWidth = () => {
    const isSSR = typeof window === 'undefined';
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};


class DesktopContainer extends Component {
    state = {};
    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});
    handleSidebarHide = () => this.setState({sidebarOpened: false});
    handleToggle = () => this.setState({sidebarOpened: true});
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
componentDidMount() {
    this.props.loadUser()
}

    render() {
        const {fixed} = this.state;
        const {activeItem} = this.state;
        const {sidebarOpened} = this.state;
        const {isAuthenticated} = this.props.auth;

        const userLinks = (<Responsive as={Menu.Menu} position={'right'}>
            {isAuthenticated ? <>
                <Menu.Item as={Link} name='Account' to={'/profile'}
                    active={activeItem === 'Account'}
                    onClick={this.handleItemClick}>
                   Account
                </Menu.Item>
                <Menu.Item name='Logout'
                           active={activeItem === 'Logout'}
                           onClick={this.props.logout}>
                    Logout
                </Menu.Item>
            </> : <div/>}

        </Responsive>);
        const guestLinks = (<Responsive as={Menu.Menu} position={'right'}>
            <Menu.Item as={Link} name='Register' to={'/signup'}
                       active={activeItem === 'Register'}
                       onClick={this.handleItemClick}>
                Register
            </Menu.Item>
            <Menu.Item as={Link} name='Login' to={'/login'}
                       active={activeItem === 'Login'}
                       onClick={this.handleItemClick}>
                Login
            </Menu.Item>
        </Responsive>);
        return (
            <div>
                <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{padding: '1em 0em'}}
                            vertical
                        >
                            <Menu
                                fixed={fixed ? 'top' : null}
                                inverted={!fixed}
                                pointing={!fixed}
                                secondary={!fixed}
                            >
                                <Container>
                                    <Menu.Item name='Home' as={Link} active={activeItem === 'Home'}
                                               to={'/'}
                                               onClick={this.handleItemClick}>
                                        Home
                                    </Menu.Item>
                                    {isAuthenticated ? userLinks : guestLinks}
                                </Container>
                            </Menu>
                        </Segment>
                    </Visibility>
                </Responsive>
                <Responsive
                    as={Sidebar.Pushable}
                    getWidth={getWidth}
                    maxWidth={Responsive.onlyMobile.maxWidth}
                >
                    <Sidebar
                        as={Menu}
                        animation='push'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item name='Home' as={Link} active={activeItem === 'Home'}
                                   onClick={this.handleItemClick}
                                   to={'/'}>
                            Home
                        </Menu.Item>
                        {isAuthenticated ? userLinks : guestLinks}
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{minHeight: 30, padding: '1em 0em'}}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar'/>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                        </Segment>
                    </Sidebar.Pusher>
                </Responsive>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {loadUser,logout})(DesktopContainer);