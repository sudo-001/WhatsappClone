import React from 'react'
import { View,Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Status } from '../shared/status'
import { Entypo } from '@expo/vector-icons'; 

export default function StatusHome() {

  return (
    <View className="flex-row">
            <TouchableOpacity className="rounded-full relative mx-3 justify-center items-center border-dashed border-2 px-4 py-4 my-4 border-[#cacaca]">
                <Entypo name="plus" size={30} color="#cacaca" />
            </TouchableOpacity>
        <ScrollView horizontal={true} className="py-4">
            <View className="flex-1 h-full w-full flex-row justify-evenly">
            {
                Status.map(status => {
                    
                    return (
                        <TouchableOpacity key={status.id} className="rounded-full relative mx-3 justify-center items-center border-2 border-[#15d615]">
                            <Image source={{uri: status.image}} className="w-16 h-16 rounded-full"/>
                        </TouchableOpacity>
                    )
                })
            }
            </View>
            
        </ScrollView>
    </View>
  )
}
