import * as React from 'react';
import {Text, View,Button,TextInput} from 'react-native';
import GoogleButton from './GoogleButton'
import axios from 'axios'


class Login extends React.Component {
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		}
	}
	componentDidMount(){
		console.log('hel')
		axios.get('http://localhost:5000/hello')
		.then((data)=>{
			console.log('hell yeah')
			console.log(data)
		})
	}	
	//minor fixs
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
				{/* <GoogleButton/> */}
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
          title="Login"
          onPress={() => this.props.loginUser(this.state.email,this.state.password)}
        />				
			</View>
		);
	}
}

export default Login;