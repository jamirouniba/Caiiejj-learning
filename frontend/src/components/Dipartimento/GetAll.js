import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDipartimenti} from '../../actions/dipartimentoAction';
import {Card, Container, Responsive} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../Css/Medium.css'

const src = 'static/assets/Img/image.png';


class DipList extends Component {

    componentDidMount() {
        this.props.getDipartimenti();

    }




    render() {


        const colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
        return (
            <Container className="card-margin">
                <Responsive as={Card.Group} itemsPerRow={4} stackable={true} >
                    {this.props.dipProp.map(dip => (
                        <Card color={colors[Math.floor(Math.random() * colors.length)]} image={src} key={dip.id}

                              header={dip.nome} as={Link}
                              to={`${dip.id}?id=${dip.id}`}
                        />

                    ))}
                </Responsive>
            </Container>


        );
    }
}

const mapStateToProps = state => ({
    dipProp: Object.values(state.DipartimentoReducer)
});

export default connect(
    mapStateToProps,
    {getDipartimenti}
)(DipList);