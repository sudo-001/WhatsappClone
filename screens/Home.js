import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import StatusHome from '../components/StatusHome'
import { History } from '../shared/history'

export default function Home() {
  return (
    <View className="flex bg-[#000] ">
      <StatusHome />

      <ScrollView className="bg-[#000] h-[84%]">
        {History.map(hist => {
          return (
            <TouchableOpacity opa className="flex-row bg-[#000] items-center my-2" key={hist.id}>
              <TouchableOpacity className={hist.status ? "rounded-full relative mx-3 justify-center items-center border-2 border-[#15d615]" : 
            "rounded-full relative mx-3 justify-center items-center border-2"
            }>
                <Image source={{ uri: hist.image }} className="w-10 h-10 rounded-full" style={ hist.status ? { borderWidth: 2, borderColor: "#000"} : ""} />
              </TouchableOpacity>

              <View className="flex w-[66%]">
                <Text className="text-lg text-[#fff] font-bold">{hist.name}</Text>
                <Text className="text-base text-[#979797]">{hist.last_msg}</Text>
              </View>

              <View className="flex">
                <Text className="text-base text-[#fff]">{hist.hour}</Text>
                <View className="justify-center items-center">

                  {hist.notifs != 0 ? 
                    <Text className="text-xs text-[#fff] bg-[#f00] p-1 px-2 rounded-full text-center">{hist.notifs}</Text> : "" }
                  
                </View>
              </View>

            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
