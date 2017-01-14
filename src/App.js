import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeNav'
import About from './about/AboutRootContainer'
import Schedule from './Schedule/ScheduleRootContainer'
import Profile from './profile/ProfileRootContainer'
import TProfileNav from './trainerprofile/TProfileRootContainer'

import { Tabs, Tab, Icon } from 'react-native-elements'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home'
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }
  render () {
    const { selectedTab } = this.state
    return (
      <Tabs hidesTabTouch>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={() => <Icon color={colors.grey2} name='home' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='home' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'about' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'about'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} type='octicon' name='globe' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} type='octicon' name='globe' size={26} />}
          onPress={() => this.changeTab('about')}>
          <About />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'profile' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 8}]}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='account-circle' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='account-circle' size={26} />}
          onPress={() => this.changeTab('profile')}>
          <Profile />
          </Tab>
        <Tab
          tabStyle={selectedTab !== 'Schedule' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'Schedule'}
          title={selectedTab === 'Schedule' ? 'SCHEDULE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='today' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='today' size={26} />}
          onPress={() => this.changeTab('Schedule')}>
          <Schedule />
        </Tab>
      </Tabs>

    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App
