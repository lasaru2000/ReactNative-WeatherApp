import { View, Text,Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import theme from '../theme/index'
import {MagnifyingGlassIcon,CalendarDaysIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'



const HomeScreen = () => {

    const [showSearch,toggleSearch] = useState(false);
    const [locations,setLocation] = useState([1,2,3]);

    const handleLocation = (loc)=>{
        console.log('location:',loc)
    }
  return (
    <View className="flex-1 relative">
     <StatusBar style='light' />
     <Image blurRadius={70} source={require("../assets/images/bg.png")} className="w-full h-full absolute" />
     <SafeAreaView className='flex flex-1'>

        {/* search */}

        <View className="mx-4 my-8 relative z-50 h-[7%]">
            <View className="flex-row justify-end items-center rounded-full"
            style={{  backgroundColor: showSearch?'rgba(255,255,255,0.2)': 'transparent'}}
             >
                {
                    showSearch? (

                        <TextInput 
                        placeholder='Search City'
                        placeholderTextColor={'lightgray'}
                        className="pl-6 h-12 flex-1 text-base text-white"
                        />

                    ):null
                }
            <TouchableOpacity
            className='rounded-full p-3 m-1 bg-white/30 '
            onPress={()=>toggleSearch(!showSearch)}
            >
                <MagnifyingGlassIcon size={25} color={'white'}/>
            </TouchableOpacity>
            </View>
            {
                locations.length>0 && showSearch?(
                    <View className="  absolute w-full bg-gray-300 top-16 rounded-3xl ">
                        {
                            locations.map((loc,index) =>{
                                let showBorder = index+1 != locations.length;
                                let borderClass = showBorder? ' border-b-2 border-b-gray-400 ':'';
                                return(
                                    <TouchableOpacity
                                    onPress={()=> handleLocation(loc)}
                                    index={index}
                                    className={"flex-row items-center border-0 p-3 px-1 mb-1"+borderClass }
                                    >
                                        <MapPinIcon size={20} color={'gray'}/>
                                        <Text className="text-black text-lg ml-2">Londen,United Kingdom</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>

                ):null
            }

        </View>

        {/* forcast-section */}

        <View className=" mx-4 justify-around flex-1 mb-1 ">
            <Text className=" text-white text-center text-2xl text-bold ">
                London,
                <Text className="text-lg font-semibold text-gray-300">
                    United Kingdom
                </Text>
            </Text>

            {/* forcast-image */}
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/partlycloudy.png")}
                className="w-52 h-52"
                />

            </View>
            <View className="space-y-2">
                <Text className="text-center font-bold  text-white text-6xl ml-5">
                    23&#176;
                </Text>
                <Text className="text-center font-bold  text-white text-xl tracking-widest">
                    Partly Cloudy
                </Text>
            </View>

            {/* Other-stats */}
            <View className=" flex-row justify-between mx-4">
                <View className="flex-row items-center space-x-2">
                    <Image source={require('../assets/icons/wind.png')} className="h-6 w-6"/>
                    <Text className="text-base text-white font-semibold">
                        22km

                    </Text>
                    

                </View>
                <View className="flex-row items-center space-x-2">
                    <Image source={require('../assets/icons/drop.png')} className="h-6 w-6"/>
                    <Text className="text-base text-white font-semibold">
                        22%

                    </Text>
                    

                </View>
                <View className="flex-row items-center space-x-2">
                    <Image source={require('../assets/icons/sun.png')} className="h-6 w-6"/>
                    <Text className="text-base text-white font-semibold">
                        6.05 AM

                    </Text>
                </View>
            </View>

            {/* forcats for next days */}

            <View className="mb-2 space-y-2 ">
                <View className="flex-row items-center mx-5 space-x-2 ">
                    <CalendarDaysIcon size={22} color={"white"}/>
                    <Text className="text-white text-base">Daily Forecast</Text>
                </View>
                <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal:15}}
                showsHorizontalScrollIndicator={false}
                >
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Tuesday</Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Wednesday </Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Thursday</Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Friday</Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Saturday</Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3
                    space-y-2 mr-4 bg-white/[0.15] ">
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-10 w-11"
                        />
                        <Text className="text-white">Sunday</Text>
                        <Text className="text-white text-xl font-semibold">23&#176;</Text>
                    </View>

                </ScrollView>

            </View>

        </View>
     </SafeAreaView>

    </View>
  
  )
}

export default HomeScreen