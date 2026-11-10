import { StyleSheet } from "react-native";


const COLORS = {
  background: "#1f2023",
  surface: "#303134",
  card: "#28292c",
  text: "#e3e3e3",
  subText: "#c4c7c5",
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
 
  // Logo
  logo: {
    fontSize: 56,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 24,
  },
 
  // Search bar
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 50,
    paddingHorizontal: 20,
    height: 64,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 18,
    marginHorizontal: 14,
  },
 
  // Pill buttons
  pillRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  pill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: COLORS.surface,
    borderRadius: 30,
    height: 52,
  },
  pillText: {
    color: COLORS.text,
    fontSize: 17,
  },
 
  // Cards
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 18,
    marginTop: 16,
  },
 
  // Shortcuts
  shortcutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  shortcut: {
    alignItems: "center",
    width: 72,
  },
  shortcutCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  shortcutLetter: {
    fontSize: 22,
    fontWeight: "bold",
  },
  shortcutLabel: {
    color: COLORS.text,
    fontSize: 14,
  },
 
  // News card
  newsTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  newsTitle: {
    flex: 1,
    color: COLORS.text,
    fontSize: 22,
    lineHeight: 30,
    marginRight: 12,
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },
  newsMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sourceIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#c0392b",
    marginRight: 8,
  },
  sourceText: {
    color: COLORS.text,
    fontSize: 15,
  },
 
  // Big image
  bigImage: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginTop: 16,
  },
});


export default styles;