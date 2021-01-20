import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/Home';
import UserIcon from '@assets/svg/user.svg';
import HomeWithClasses from '@screens/HomeWithClasses';
import HomeIcon from '@assets/svg/home.svg';
import CalendarIcon from '@assets/svg/calendar.svg';
import GridIcon from '@assets/svg/grid.svg';
import MenuIcon from '@assets/svg/menu.svg';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const stackProps = {
  screenOptions: {
    headerTitleAlign: 'center',
    headerTransparent: true,
    headerRight: () => (
      <View style={{ paddingHorizontal: 30 }}>
        <UserIcon width={30} height={30} />
      </View>
    ),
    headerTitleStyle: {
      color: '#ffff',
      fontFamily: 'OpenSans-Regular',
      fontSize: 10,
    },
  },
};

const EmptyHomeStack = () => {
  return (
    <Stack.Navigator {...stackProps}>
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

const FullHomeStack = () => {
  return (
    <Stack.Navigator {...stackProps}>
      <Stack.Screen component={HomeWithClasses} name="HomeWithClasses" />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: '#000' },
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: () => null,
        tabBarIcon: () => {
          const icons = {
            Home: <HomeIcon />,
            HomeWithClasses: <GridIcon />,
            Calendar: <CalendarIcon />,
            Menu: <MenuIcon />,
          };
          return icons[route.name];
        },
      })}
    >
      <Tab.Screen component={EmptyHomeStack} name="Home" />
      <Tab.Screen component={FullHomeStack} name="HomeWithClasses" />
      <Tab.Screen component={EmptyHomeStack} name="Calendar" />
      <Tab.Screen component={EmptyHomeStack} name="Menu" />
    </Tab.Navigator>
  );
};

export default Router;
