import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import MateralIcons from "react-native-ico-material-design"

const OnboardingScreen = ({navigation}) => {
    return(
        <SafeAreaView>
            <View>
                <Text></Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigte('Login')}>
                <Text style={{
                    
                    }}>
                    Let's COMMUTE
                </Text>
                <MateralIcons/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnboardingScreen;