import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView, Text, TextInput, View, StyleSheet, Platform, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecordFormStore } from '../record/store/useRecordFormStore.js';
import TopNavigation from '../../../shared/components/TopNavigation.jsx';
import Profile from '../../../shared/components/Profile.jsx';
import Music from '../../../shared/components/Music.jsx';
import RecordImage from '../record/components/RecordImage.jsx';
import RecordText from '../record/components/RecordText.jsx';
import FoldCorner from '../../../assets/write/graphic_paper.svg';
import BottomBar from '../components/BottomBar.jsx';

import { padding } from '../../../shared/styles/token.js';
import { colors } from '../../../shared/styles/color.js';

const LetterScreen = () => {
  const recordForm = useRecordFormStore();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TopNavigation
        title='편지 작성'
        buttonLabel='다음'
      />
      <View style={styles.container}>
        <View style={styles.sectionWrapper}>
          <FoldCorner
            style={styles.fold}
          />

          <ScrollView
            style={styles.section}
            contentContainerStyle={styles.sectionContent}
          >

            <Profile />
            <Music />

            <RecordText
              recordForm={recordForm}
            />

            <RecordImage
              recordForm={recordForm}
            />

            {/* <RecordFormDebug /> */}

          </ScrollView>
        </View>
        <BottomBar />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: padding.M,
    backgroundColor: colors.bgDefault
  },

  sectionWrapper: {
    flex: 1,
    position: 'relative'
  },

  section: {
    flex: 1,
    // paddingHorizontal: padding.M,
    backgroundColor: colors.bgLayerDefault,
    borderRadius: 2,
  },

  sectionContent: {
    paddingVertical: 16,
  },

  fold: {
    position: 'absolute',
    top: -0.5,
    right: 0,
    zIndex: 10,
    elevation: 10,
  },
});

export default LetterScreen