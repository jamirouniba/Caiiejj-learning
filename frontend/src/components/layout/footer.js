import React, {Component} from 'react';
import {Container, Divider, Grid, Header, Icon, List, Responsive, Segment} from 'semantic-ui-react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab, faFacebook, faGithub, faGooglePlusG, faTwitter} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
  render() {
    return (
        <Responsive>
          <Segment inverted style={{margin: '0em 0em', padding: '5em 0em', bottom: '0'}} vertical
                   textAlign='center'>
           <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Policy</List.Item>
                <List.Item as='a'>Terms and Conditions</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as={'a'} > <FontAwesomeIcon icon={faFacebook} size={'small'}/> Facebook</List.Item>
                <List.Item as={'a'} > <FontAwesomeIcon icon={faTwitter} size={'small'}/> Twitter</List.Item>
                <List.Item as={'a'} > <FontAwesomeIcon icon={faGithub} size={'small'}/> GitHub</List.Item>
                <List.Item as={'a'} > <FontAwesomeIcon icon={faGooglePlusG} size={'small'}/> Google+</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
               E-mail: admin@amin.it
              </p>
              <hr/>
              <p>
               Tel: 1234567891
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          </Segment>
        </Responsive>


    );
  }
}

export default Footer;
