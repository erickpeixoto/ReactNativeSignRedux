import React , { Component } from 'react'
import { View } from 'react-native'
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base'
import { Field,reduxForm } from 'redux-form'
import styles from './Styles'

const validate = values => {
  const error= {}
  error.email= ''
  error.name= ''
  var ema = values.email
  var nm = values.name
  if(values.email === undefined){
    ema = ''
  }
  if(values.name === undefined){
    nm = ''
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short'
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included'
  }
  if(nm.length > 8){
    error.name= 'max 8 characters'
  }
  return error
}
class SimpleForm extends Component {
  constructor(props){
    super(props)
    this.state={
      isReady: false
    }
    this.renderInput = this.renderInput.bind(this)
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false
    if(error !== undefined){
      hasError= true
    }
    return( 
      <Item error= {hasError}>
        <Input {...input} style={styles.input} />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  render(){
     const { handleSubmit, reset } = this.props
   
    return (
      <View>
          <Field name="email" component={this.renderInput} />
          <Field name="name" component={this.renderInput} />
          <Button block primary onPress= {handleSubmit}>
            <Text>Acessar</Text>
          </Button>
      </View>
    )
  }
}
export default reduxForm({
  form: 'signin'
})(SimpleForm)