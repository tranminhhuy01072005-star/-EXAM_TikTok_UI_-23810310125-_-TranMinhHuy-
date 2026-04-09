import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

// ================== SCREEN: FOLLOWING ==================
const FollowingScreen = () => (
  <ImageBackground
    source={{ uri: 'https://picsum.photos/id/1015/800/1420' }} // ảnh mây
    style={styles.fullScreen}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" />

    {/* Right side actions */}
    <View style={styles.rightActions}>
      <TouchableOpacity style={styles.actionItem}>
        <Image source={{ uri: 'https://picsum.photos/id/64/80/80' }} style={styles.creatorAvatar} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="heart" size={38} color="#fff" />
        <Text style={styles.actionCount}>4,445</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="chatbubble" size={38} color="#fff" />
        <Text style={styles.actionCount}>64</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="arrow-redo" size={38} color="#fff" />
      </TouchableOpacity>
    </View>

    {/* Bottom info */}
    <View style={styles.bottomInfo}>
      <Text style={styles.username}>@karenne <Text style={{ fontWeight: 'normal' }}>· 1:28</Text></Text>
      <Text style={styles.caption}>#avicii #wflove</Text>
      <View style={styles.musicBar}>
        <Ionicons name="musical-note" size={18} color="#fff" />
        <Text style={styles.musicText}>Avicii - Waiting For Love (ft.</Text>
      </View>
    </View>
  </ImageBackground>
);

// ================== SCREEN: FOR YOU ==================
const ForYouScreen = () => (
  <ImageBackground
    source={{ uri: 'https://picsum.photos/id/1005/800/1420' }} // ảnh guitarist
    style={styles.fullScreen}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" />

    {/* Right side actions */}
    <View style={styles.rightActions}>
      <TouchableOpacity style={styles.actionItem}>
        <Image source={{ uri: 'https://picsum.photos/id/201/80/80' }} style={styles.creatorAvatar} />
        <View style={styles.plusButton}>
          <Ionicons name="add" size={22} color="#fff" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="heart" size={38} color="#fff" />
        <Text style={styles.actionCount}>328.7K</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="chatbubble" size={38} color="#fff" />
        <Text style={styles.actionCount}>578</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="arrow-redo" size={38} color="#fff" />
      </TouchableOpacity>
    </View>

    {/* Bottom info */}
    <View style={styles.bottomInfo}>
      <Text style={styles.username}>@craig_love</Text>
      <Text style={styles.caption}>The most satisfying Job #fyp #satisfying #roadmarking</Text>
      <View style={styles.musicBar}>
        <Ionicons name="musical-note" size={18} color="#fff" />
        <Text style={styles.musicText}>Roddy Rounditch - The Rou</Text>
      </View>
    </View>
  </ImageBackground>
);

// ================== TOP TABS NAVIGATOR ==================
const TopTab = createMaterialTopTabNavigator();

const HomeTopTabs = () => (
  <TopTab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: 'rgba(0,0,0,0.7)' },
      tabBarIndicatorStyle: { backgroundColor: '#00f2ea', height: 3 },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#aaa',
      tabBarLabelStyle: { fontWeight: '700', fontSize: 16 },
    }}
  >
    <TopTab.Screen name="Following" component={FollowingScreen} />
    <TopTab.Screen name="For You" component={ForYouScreen} />
  </TopTab.Navigator>
);

// ================== COMMENTS SCREEN ==================
const commentsData = [
  { id: '1', username: 'martini_rand', text: 'How neatly I write the date in my book', time: '22h', likes: '8098' },
  { id: '2', username: 'maxjacobson', text: "Now that's a skill very talented", time: '22h', likes: '8098' },
  { id: '3', username: 'zackjohn', text: 'Doing this would make me so anxious', time: '22h', likes: '8098' },
  { id: '4', username: 'kiera_d', text: 'Use that on r air forces to whiten them', time: '21h', likes: '8098' },
  { id: '5', username: 'miss_potter', text: "I should've used that on his forces 😭", time: '13h', likes: '8098' },
  { id: '6', username: 'karenne', text: 'No pressure', time: '22h', likes: '8098' },
  { id: '7', username: 'joshua_l', text: "My OCD couldn't do it", time: '15h', likes: '8098' },
];

const CommentsScreen = () => (
  <View style={styles.commentsContainer}>
    <StatusBar barStyle="light-content" />

    {/* Video preview ở trên */}
    <ImageBackground
      source={{ uri: 'https://picsum.photos/id/1005/800/300' }}
      style={styles.commentsVideoPreview}
    >
      <View style={styles.commentsHeader}>
        <Text style={styles.commentsCount}>579 comments</Text>
      </View>
    </ImageBackground>

    <FlatList
      data={commentsData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.commentRow}>
          <Image 
            source={{ uri: `https://picsum.photos/id/${item.id}/48/48` }} 
            style={styles.commentAvatar} 
          />
          <View style={styles.commentContent}>
            <Text style={styles.commentUsername}>{item.username}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
            <Text style={styles.commentTime}>{item.time}</Text>
          </View>
          <View style={styles.commentLike}>
            <Ionicons name="heart" size={22} color="#fff" />
            <Text style={styles.commentLikeCount}>{item.likes}</Text>
          </View>
        </View>
      )}
    />

    {/* Ô comment */}
    <View style={styles.addCommentBar}>
      <Text style={styles.addCommentText}>Add comment...</Text>
      <Ionicons name="happy-outline" size={28} color="#ccc" style={{ marginRight: 12 }} />
      <Ionicons name="send" size={28} color="#00f2ea" />
    </View>
  </View>
);

// ================== CÁC SCREEN PHỤ ==================
const DiscoverScreen = () => <View style={styles.center}><Text style={styles.placeholder}>🔎 Discover</Text></View>;
const CreateScreen = () => <View style={styles.center}><Text style={styles.placeholder}>📹 Create Video</Text></View>;
const ProfileScreen = () => <View style={styles.center}><Text style={styles.placeholder}>👤 Profile</Text></View>;

// ================== BOTTOM TABS NAVIGATOR ==================
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', height: 60 },
          tabBarActiveTintColor: '#00f2ea',
          tabBarInactiveTintColor: '#888',
          tabBarShowLabel: false,
        }}
      >
        <BottomTab.Screen 
          name="Home" 
          component={HomeTopTabs} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }}
        />
        
        <BottomTab.Screen 
          name="Discover" 
          component={DiscoverScreen} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} /> }}
        />
        
        <BottomTab.Screen 
          name="Create" 
          component={CreateScreen} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={45} color="#00f2ea" /> }}
        />
        
        <BottomTab.Screen 
          name="Comments" 
          component={CommentsScreen} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble" size={size} color={color} /> }}
        />
        
        <BottomTab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// ================== STYLES ==================
const styles = StyleSheet.create({
  fullScreen: { flex: 1, width, height },
  rightActions: { position: 'absolute', right: 12, top: '35%', alignItems: 'center', gap: 25 },
  actionItem: { alignItems: 'center' },
  creatorAvatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 3, borderColor: '#fff' },
  plusButton: { position: 'absolute', bottom: -6, right: -6, backgroundColor: '#ff0050', width: 24, height: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  actionCount: { color: '#fff', fontSize: 13, fontWeight: '600', marginTop: 4 },
  bottomInfo: { position: 'absolute', bottom: 70, left: 16, right: 70 },
  username: { fontSize: 16, fontWeight: '700', color: '#fff' },
  caption: { fontSize: 15, color: '#fff', marginTop: 4 },
  musicBar: { flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 6 },
  musicText: { fontSize: 14, color: '#fff' },

  commentsContainer: { flex: 1, backgroundColor: '#000' },
  commentsVideoPreview: { height: 220, justifyContent: 'flex-end' },
  commentsHeader: { backgroundColor: 'rgba(0,0,0,0.75)', padding: 12, alignItems: 'center' },
  commentsCount: { fontSize: 16, fontWeight: '700', color: '#fff' },

  commentRow: { flexDirection: 'row', padding: 14, borderBottomWidth: 0.5, borderBottomColor: '#222' },
  commentAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  commentContent: { flex: 1 },
  commentUsername: { fontWeight: '700', fontSize: 15 },
  commentText: { fontSize: 15, marginVertical: 4, lineHeight: 20 },
  commentTime: { fontSize: 13, color: '#888' },
  commentLike: { alignItems: 'center', paddingHorizontal: 8 },
  commentLikeCount: { fontSize: 13, color: '#fff', marginTop: 4 },

  addCommentBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111', padding: 12, borderTopWidth: 1, borderTopColor: '#222' },
  addCommentText: { flex: 1, color: '#888', fontSize: 16 },

  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111' },
  placeholder: { fontSize: 22, color: '#00f2ea' },
});