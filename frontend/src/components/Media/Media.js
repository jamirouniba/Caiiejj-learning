import React, {Component} from 'react';
import {getMedia} from '../../actions/MediaActions';
import {Accordion, Container, Icon, Responsive} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


const queryString = require('query-string');


const groupByt = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

function groupBy(collection, property) {
    var i = 0, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1)
            result[index].push(collection[i]);
        else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
}

const groupByType = groupByt('tipo');

class MediaList extends Component {
    state = {activeIndex: 0};

    componentDidMount() {
        this.props.getMedia(queryString.parse(location.search).id);
    }

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({activeIndex: newIndex})

    };


    render() {
        console.log("medialist", this.props.MediaProp);
        const {activeIndex} = this.state;

        const group = groupBy( this.props.MediaProp,'tipo');
        console.log(group);
        return (
            <Container className="card-margin">
                <Responsive as={Accordion} styled fluid>
                    {group.map((nest) => (
                        nest.map(file => (
                            <div key={file.tipo}>
                                <Accordion.Title
                                    active={activeIndex === file.tipo}
                                    index={file.tipo}
                                    onClick={this.handleClick}>
                                    <Icon name='dropdown'/>
                                    {file.tipo}
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === file.tipo}>
                                    <p>
                                        <Link
                                            to={`${queryString.parse(location.search).id}/${file.id}?id=${file.id}`}>
                                            {file.nome}
                                        </Link>
                                    </p>
                                </Accordion.Content>
                            </div>
                        ))
                    ))}

                </Responsive>
            </Container>


        );
    }
}

const mapStateToProps = state => ({
        MediaProp: Object.values(state.MediaReducer)
    })
;

export default connect(mapStateToProps, {getMedia})(MediaList);