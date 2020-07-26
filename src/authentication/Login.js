import * as React from 'react';
import {Text, View,Button} from 'react-native';


class Login extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
	}

	render(){
		console.log(this.props)
		return(
			<View>
				<Text>Login</Text>
				<Button
          title="oyere"
          onPress={() => this.props.loginUser('ishanarora143','Fuckingfriends143')}
        />				
			</View>
		);
	}
}

export default Login;