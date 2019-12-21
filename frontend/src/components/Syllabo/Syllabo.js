import React, {Component} from 'react';
import {Container, List, Tab} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {getLezione} from "../../actions/LezioneActions";
import {connect} from "react-redux";
import {getSyllabo} from "../../actions/SyllaboActions";

const queryString = require('query-string');


class SyllaboList extends Component {


    componentDidMount() {
        this.props.getSyllabo(queryString.parse(location.search).id);
        this.props.getLezione(queryString.parse(location.search).id)
    }


    render() {
        console.log(queryString.parse(location.search).id);
        console.log(this.props.SyllaboProp);
        console.log(this.props.LezioneProp);

        return (
            <Container className="card-margin">
                {this.props.SyllaboProp.map(syl => (
                    <Tab menu={{fluid: true, vertical: true, tabular: true}} key={syl.id}
                         panes={
                             [
                                 {
                                     menuItem: "descrizione",
                                     render: () => <Tab.Pane>{syl.nome}</Tab.Pane>
                                 },
                                 {
                                     menuItem: "descrizione2",
                                     render: () => <Tab.Pane>{syl.descrizione}</Tab.Pane>
                                 },
                                 {
                                     menuItem: "Lista Lezioni", render: () => <Tab.Pane>
                                         {this.props.LezioneProp.map(lez => (
                                             <List>
                                                 <List.Item key={lez.id}>
                                                     <List.Icon name='folder'/>
                                                     <List.Content>
                                                         <Link
                                                               to={`${queryString.parse(location.search).id}/${lez.id}?id=${lez.id}`}>
                                                             {lez.nome}
                                                         </Link>
                                                     </List.Content>
                                                 </List.Item>
                                             </List>
                                         ))}
                                     </Tab.Pane>
                                 }
                             ]
                         }
                    />
                ))}
            </Container>


        );
    }
}

const mapStateToProps = state => ({
        SyllaboProp: Object.values(state.SyllaboReducer),
        LezioneProp: Object.values(state.LezioneReducer)
    })
;

export default connect(mapStateToProps, {getLezione, getSyllabo})(SyllaboList);