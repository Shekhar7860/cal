import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, SafeAreaView, KeyboardAvoidingView , ImageBackground,  TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import styles from './styles';
import { withNavigation } from "react-navigation";
import {colors, fonts, padding, dimensions, align} from './base.js';

 class  Otp extends Component {
  constructor(props){
    super(props);
   
    this.state = { 
      mobile:'9646407363',    
      emailError:'',
      emailFormatError:'',
      mobileLength:'',
      loading:false,
      first:'',
      second:'',
      third:'',
      fourth:'', 
      type:''
    }
  }

  componentDidMount()
   {
      // if(this.props.navigation.state.params)
      // {
      //   if(this.props.navigation.state.params.type)
      //   {
      //     console.log(this.props.navigation.state.params.type.mobile);
      //     this.setState({ mobile: this.props.navigation.state.params.type.mobile})
      //     this.setState({ type:this.props.navigation.state.params.type.type})
      //   }
      //   else if (this.props.navigation.state.params.mobile)
      //   {
      //     this.setState({ mobile: this.props.navigation.state.params.mobile.mobile})
      //     this.setState({ type:this.props.navigation.state.params.mobile.type})
      //   }
      // }
   }
 
   gotoSignIn = () =>
    {
      this.props.navigation.navigate('Register')
    }

    openLogin = () =>
    {
      setTimeout(() => {
      this.props.navigation.navigate('Login')
      }, 1000)
    }

    GetFourthValue = (value) =>
     {
        this.props.navigation.navigate('Profile')
       }

    GetValueFunction = (ValueHolder) =>{
      var Value = ValueHolder.length.toString() ;
      this.setState({ mobile:ValueHolder})
      this.setState({ mobileLength:Value})
     }

   goToHome = (res) => {
     
    this.props.navigation.navigate('Profile')
   }

   resendOtp()
   {
    // this.setState ({ loading: true});
    // setTimeout(() => 
    // {
    // this.setState({loading: false})
    // service.resendOtp(this.state.mobile).then((res) => {
    //   console.log(res)
    //   if(res)
    //   {
    //     this.firstTextInput.clear();
    //     this.secondTextInput.clear();
    //     this.thirdTextInput.clear();
    //     this.fourthTextInput.clear();
    //     this.refs.defaultToastBottom.ShowToastFunction(res.message);
    //   }
    //   else
    //   {
    //     this.refs.defaultToastBottom.ShowToastFunction("Network Error"); 
    //   }
    // })
    // }, 3000)
   }

 
   
  render() {
    return (
  <SafeAreaView style={{flex:1, alignItems:'center',  backgroundColor:'#588029'}}>
    <View style={{width: dimensions.fullWidth ,height: dimensions.fullHeight/2,flexDirection: 'column',alignItems: 'flex-start'}}>
            <TouchableOpacity activeOpacity={0.5} onPress={this.backAction}>
              <View style = {{top:10,left:0, width: 60,height: 60,alignItems: 'center',justifyContent:'center'}}>
              <Image style = {{ left:-10,width: 12,height: 15,alignItems: 'center'}}
              source = {require('../images/back.png')}/></View>
            </TouchableOpacity>
            <View style = {{top:30,width: dimensions.fullWidth,height:dimensions.fullHeight/2 - 80,alignItems:'center',}}><Text style = {{fontSize:25,fontWeight:'400' , top:15, color:colors.white}} >VERIFICATION CODE</Text>
            <Text style = {{fontSize:16,fontWeight:'200' , top:30, color:colors.white}}>Enter the four digit code sent to you at</Text>
            <Text style = {{fontSize:16,fontWeight:'200' , top:40, color:colors.white}}> + 91 - {this.state.mobile}</Text>
            <View behavior = 'padding'
            >
                  <View style = {{top:50,backgroundColor:'',width:240,height:70,flexDirection:'row', marginTop:20}}>
                      <TextInput placeholder = ""
                      textAlign={'center'}
                      onChangeText={first => {this.setState({first}), this.secondTextInput.focus()}}
                      placeholderTextColor = 'black'
                      autoCapitalize = 'none'
                      returnKeyType = "done"
                      maxLength={1}
                      keyboardType='numeric'
                      autoFocus={true}
                      ref={(input) => { this.firstTextInput = input; }}
                      style = {styles.input} />
                      <TextInput placeholder = ""
                      textAlign={'center'}
                      onChangeText={second => {this.setState({second}), this.thirdTextInput.focus()}}
                      placeholderTextColor = 'black'
                      autoCapitalize = 'none'
                      returnKeyType = "done"
                      keyboardType='numeric'
                      maxLength={1}
                      ref={(input) => { this.secondTextInput = input; }}
                      style = {styles.input} />
                      <TextInput placeholder = ""
                      textAlign={'center'}
                      onChangeText={third => {this.setState({third}),this.fourthTextInput.focus()}}
                      placeholderTextColor = 'black'
                      autoCapitalize = 'none'
                      maxLength={1}
                      returnKeyType = "done"
                      keyboardType='numeric'
                      ref={(input) => { this.thirdTextInput = input; }}
                      style = {styles.input}/>
                      <TextInput placeholder = ""
                      textAlign={'center'}
                      onChangeText={(text)=>
                          this.GetFourthValue(text)}
                      placeholderTextColor = 'black'
                      autoCapitalize = 'none'
                      returnKeyType = "done"
                      keyboardType='numeric'
                      maxLength={1}
                      ref={(input) => { this.fourthTextInput = input; }}
                      style = {styles.input} />
                  </View>
            </View>
           </View>
   </View>
    <TouchableOpacity style={styles.otpButton} onPress={() => this.resendOtp()}>
        <Text style={styles.accountButtonText}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lookingButtonBackground} onPress={() => this.gotoSignIn()}>
        <Text style={styles.accountButtonText}>Change Number </Text>
      </TouchableOpacity>
     
</SafeAreaView>
    );
}
}
export default withNavigation(Otp);