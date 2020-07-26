import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {

	constructor(props){
		super(props);

	}

	loginNavigate(){
		this.props.navigation.navigate('Login');
	}

	render(){
		return(
			<View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello Homies</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
		);
	}
}

export default HomeScreen;