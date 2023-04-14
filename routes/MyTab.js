import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react/cjs/react.production.min';

export function MyTab({ state, descriptors, navigation }) {
    
  return (
    <View className="flex-row bg-[#000] shadow-white shadow-lg py-4 rounded-t-xl justify-evenly">

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className=" flex-row flex-1 justify-center items-center h-full"
          >
            { label === "plus" ? 
                <View className="bg-[#15d615] p-1 rounded-full relative bottom-2">
                    <MaterialCommunityIcons name={label} color='#fff' size={34} /> 
                </View>
                : 
                <MaterialCommunityIcons name={label} color={ isFocused ? '#15d615' : '#222' } size={28} />
            }
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
