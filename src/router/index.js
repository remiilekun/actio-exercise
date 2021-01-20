import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import HomeIcon from '@assets/svg/home.svg';
import CalendarIcon from '@assets/svg/calendar.svg';
import GridIcon from '@assets/svg/grid.svg';
import MenuIcon from '@assets/svg/menu.svg';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: '#000' },
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => null,

        tabBarIcon: () => {
          const icons = {
            Home: <HomeIcon />,
            Grid: <GridIcon />,
            Calendar: <CalendarIcon />,
            Menu: <MenuIcon />,
          };
          return icons[route.name];
        },
      })}
    >
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Home} name="Grid" />
      <Tab.Screen component={Home} name="Calendar" />
      <Tab.Screen component={Home} name="Menu" />
    </Tab.Navigator>
  );
};

export default Router;
