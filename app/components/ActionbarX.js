import React from 'react';
import Button from './Button';
import { View, StyleSheet } from 'react-native';


export default class ActionbarX extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(name){
		this.props.onClick(name);
	}

	render() {
		return (
			<View style={styles.actionBar}>
				<Button name=" < " onClick={()=>this.props.navigate('Index')} isDisabled={this.props.currentQuestion === 0 || this.props.isFinished}/>
				<Button name="Save" onClick={this.onClick} isDisabled={this.props.currentQuestion === 9 || this.props.isFinished}/>
				<Button name="Load" onClick={this.onClick} isDisabled={this.props.isFinished}/> 
				<Button name="Remove" onClick={this.onClick} isDisabled={false} />
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	actionBar: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
})