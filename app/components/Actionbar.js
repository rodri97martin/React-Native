import React from 'react';
import Button from './Button';
import { View, StyleSheet } from 'react-native';


export default class Actionbar extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(name){
		this.props.onClick(name)
	}

	render() {
		return (
			<View style={styles.actionBar}>
				<Button name="Anterior" onClick={this.onClick} isDisabled={this.props.currentQuestion === 0 || this.props.isFinished}/>
				<Button name="Siguiente" onClick={this.onClick} isDisabled={this.props.currentQuestion === 9 || this.props.isFinished}/>
				<Button name="Submit" onClick={this.onClick} isDisabled={this.props.isFinished}/> 
				<Button name="Play Again" onClick={this.onClick} isDisabled={false} />
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