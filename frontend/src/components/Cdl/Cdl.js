import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCdlsdip} from '../../actions/CdlActions';
import {Card, Container, Responsive} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import bread from '../layout/Breadcrumbs'

const src = 'static/assets/Img/image.png';
const queryString = require('query-string');

class CdlList extends Component {

    componentDidMount() {
        this.props.getCdlsdip(queryString.parse(location.search).id);
    }


    render() {
        console.log("Cdl: ", this.props.cdlProp);
        const colors = ["red", "orange", "yellow", "olive", "green", "teal",
            "blue", "violet", "purple", "pink", "brown", "grey",
            "black"];


        return (
            <div>

                <Container className="card-margin">
                    <Responsive as={Card.Group} itemsPerRow={4} stackable={true}>
                        {this.props.cdlProp.map(cdl => (
                            <Card color={colors[Math.floor(Math.random() * colors.length)]} image={src} key={cdl.id}
                                  header={cdl.nome} as={Link}
                                  to={`${queryString.parse(location.search).id}/${cdl.id}?id=${cdl.id}`}/>
                        ))}
                    </Responsive>
                </Container>
            </div>

        );
    }
}

const mapStateToProps = state => ({
        cdlProp: Object.values(state.CdlReducer)
    })
;

export default connect(mapStateToProps, {getCdlsdip})(CdlList);