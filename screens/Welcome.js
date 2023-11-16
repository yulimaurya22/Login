import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation}) => {
return (
    <LinearGradient
        style={{
            flex: 1
        }}
        colors={[COLORS.secondary, COLORS.primary]}
    >
        <View style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 250,
            width: "100%"
        }}>
            <Text style={{
                fontSize:50,
                fontWeight: 800,
                color: COLORS.white
            }}>Selamat Datang Di Resepku</Text>

            <View style={{marginVertical: 22}}>
                <Text style={{
                fontSize:16,
                color: COLORS.white,
                marginVertical: 4
                 }}>Memasak Dengan Mudak Dengan Resepku</Text>

                 <Text style={{
                fontSize:16,
                color: COLORS.white,
                 }}>Resep Andalan Ibu Indonesia</Text>
            </View>

            <Button
            title= "Login"
            onPress={()=>navigation.navigate("Login")}
            style={{
                marginTop: 22,
                width: "100%"
            }}
            />

            <View style={{
                flexDirection: "row",
                margintop: 12,
                justifyContent: "center"
            }}>
                <Text style={{
                    fontSize: 16,
                    color: COLORS.white
                }}> Belum Mempunyai akun ?</Text>

                <Pressable
                onPress={()=>navigation.navigate("Signup")}
                >
                <Text style={{
                    fontSize: 16,
                    color: COLORS.white,
                    fontWeight: "bold",
                    marginLeft: 4
                }}>Signup</Text>
                </Pressable>

            </View>
        </View>
    </LinearGradient>
)

}
export default Welcome