import * as React from 'react';
import {Text, View,Button,TextInput} from 'react-native';


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		}
	}
	componentDidMount(){
		
	}
	handleEmail=(text)=>{
		this.setState({email:text})
	}
	handlePassword=(text)=>{
		this.setState({password:text})
	}

	render(){
		console.log(this.props)
		return(
			<View>
				<Text>Login</Text>
				<TextInput
					style={{height: 40}}
					placeholder="username"
					onChangeText={this.handleEmail}
					defaultValue={this.state.text}
				/>
				<TextInput
					style={{height: 40}}
					placeholder="password"
					onChangeText={this.handlePassword}
					defaultValue={this.state.text}
				/>
				<Button
          title="oyere"
          onPress={() => this.props.loginUser(this.state.email,this.state.password)}
        />				
			</View>
		);
	}
}

export default Login;