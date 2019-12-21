import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCorsiCdl} from '../../actions/CorsoActions';
import {Accordion, Container, Icon, Image, List, Responsive} from "semantic-ui-react";
import {Link} from "react-router-dom";
import bread from "../layout/Breadcrumbs";

const queryString = require('query-string');

const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

const groupByYear = groupBy('anno');


class CorsoList extends Component {
    state = {activeIndex: 0};

    componentDidMount() {
        this.props.getCorsiCdl(queryString.parse(location.search).id);
    }

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({activeIndex: newIndex})

    };


    render() {

        const {activeIndex} = this.state;
        console.log("Corsi:", Object.values(groupByYear(this.props.CorsoProp)));
        return (
            <Container className="card-margin">

                <h2>Lista Insegnamenti</h2>
                < Responsive as={Accordion} styled fluid>
                    {this.props.CorsoProp.map((corso) =>
                        <div key={corso.anno}>
                            <Accordion.Title
                                active={activeIndex === corso.anno}
                                index={corso.anno}
                                onClick={this.handleClick}>
                                <Icon name='dropdown'/>
                                {corso.anno}
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === corso.anno}>
                                <List animated verticalAlign='middle'>
                                    <List.Item>
                                        <Image avatar
                                               src='https://react.semantic-ui.com/images/avatar/small/helen.jpg'/>
                                        <List.Content>
                                            <List.Header as={Link}
                                                to={`${queryString.parse(location.search).id}/${corso.id}?id=${corso.id}`}
                                            >
                                                {corso.nome}
                                            </List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                        </Accordion.Content>
                        </div>)}
                </Responsive>
            </Container>


        );
    }
}

const mapStateToProps = state => ({
        CorsoProp: Object.values(state.CorsoReducer)
    })
;

export default connect(mapStateToProps, {getCorsiCdl})(CorsoList);