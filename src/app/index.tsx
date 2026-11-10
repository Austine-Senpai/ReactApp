import { Text, TextInput, TouchableOpacity, View, ScrollView, Pressable, Image } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// ---------- Types ----------
type ShortcutItem = {
  id: string;
  label: string;
  letter: string;
  color: string;
};
 
type PillButtonProps = {
  icon: React.ReactNode;
  label: string;
};

// ---------- Data ----------
const shortcuts: ShortcutItem[] = [
  { id: "1", label: "animepahe", letter: "A", color: "#e74c3c" },
  { id: "2", label: "ChatGPT", letter: "C", color: "#ffffff" },
  { id: "3", label: "Google", letter: "G", color: "#4285F4" },
  { id: "4", label: "DeepSeek", letter: "D", color: "#4d6bfe" },
];
 
const news = {
  title: "Tinubu departs Saudi Arabia after lesser hajj",
  source: "TheCable",
  time: "3h",
  thumbnail: "https://picsum.photos/200/200",
  image: "https://picsum.photos/600/350",
};
 
// ---------- Small reusable components ----------
function Shortcut({ label, letter, color }: ShortcutItem) {
  return (
    <TouchableOpacity style={styles.shortcut}>
      <View style={styles.shortcutCircle}>
        <Text style={[styles.shortcutLetter, { color }]}>{letter}</Text>
      </View>
      <Text style={styles.shortcutLabel} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
 
function PillButton({ icon, label }: PillButtonProps) {
  return (
    <TouchableOpacity style={styles.pill}>
      {icon}
      <Text style={styles.pillText}>{label}</Text>
    </TouchableOpacity>
  );
}


export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 1. Logo */}
        <Text style={styles.logo}>Google</Text>
 
        {/* 2. Search bar */}
        <View style={styles.searchBar}>
          <Ionicons name="logo-google" size={24} color="#4285F4" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Google or type URL"
            placeholderTextColor="#c4c7c5"
          />
          <Ionicons name="mic" size={24} color="#e3e3e3" />
        </View>
 
        {/* 3. AI Mode + Incognito buttons */}
        <View style={styles.pillRow}>
          <PillButton
            icon={
              <MaterialCommunityIcons
                name="star-four-points-outline"
                size={20}
                color="#e3e3e3"
              />
            }
            label="AI Mode"
          />
          <PillButton
            icon={
              <MaterialCommunityIcons name="incognito" size={20} color="#e3e3e3" />
            }
            label="Incognito"
          />
        </View>
 
        {/* 4. Shortcuts card */}
        <View style={styles.card}>
          <View style={styles.shortcutRow}>
            {shortcuts.map((item) => (
              <Shortcut key={item.id} {...item} />
            ))}
          </View>
        </View>
 
        {/* 5. News card */}
        <View style={styles.card}>
          <View style={styles.newsTop}>
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Image source={{ uri: news.thumbnail }} style={styles.thumbnail} />
          </View>
 
          <View style={styles.newsMeta}>
            <View style={styles.row}>
              <View style={styles.sourceIcon} />
              <Text style={styles.sourceText}>
                {news.source} · {news.time}
              </Text>
            </View>
            <View style={styles.row}>
              <Ionicons
                name="share-social-outline"
                size={20}
                color="#e3e3e3"
                style={{ marginRight: 20 }}
              />
              <Ionicons name="ellipsis-vertical" size={20} color="#e3e3e3" />
            </View>
          </View>
        </View>
 
        {/* 6. Big image */}
        <Image source={{ uri: news.image }} style={styles.bigImage} />
      </ScrollView>
    </SafeAreaView>
  );
}


type setProps = {
  name: string,
  age?: number
}

function Card(props:setProps){
  return(
    <Text>That {props.name}, is {props.age} years old</Text>
  )
}


function Test2({name, age}:{name: string, age:number}){
  return(
    <Text>This {name}, is {age} years old</Text>
  )
}