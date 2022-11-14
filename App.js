import { useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import { useFonts, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Ionicons } from "@expo/vector-icons";
LogBox.ignoreAllLogs();

function OtherScreen({ route }) {
  const { name } = route.params;
  return (
    <View style={styles.centerScreen}>
      <Text>{name}</Text>
    </View>
  );
}

function CreditScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "RENOVASI Kary",
      selected: false,
    },
    {
      id: 2,
      name: "MULTIGUNA Kary",
    },
    {
      id: 3,
      name: "KAI PRIORITY NEW",
    },
    {
      id: 4,
      name: "KAI PRIORITY KARY NEW",
    },
    {
      id: 5,
      name: "MULTIGUNA",
    },
    {
      id: 6,
      name: "KAI PRIORITY 2X",
    },
  ]);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={styles.creditContainer}>
        <View style={styles.payAbility}>
          <Text style={styles.headingText}>Kemampuan Angsur</Text>
          <Text style={styles.label}>Rp 30,000,000</Text>
        </View>
        <Text style={styles.linkInfo}>Apa itu saldo?</Text>
        <View style={styles.tips}>
          <Text style={styles.headingText}>Tips</Text>
          <Text style={styles.label}>- Balance saldo didapatkan dari informasi gaji dan pinjaman</Text>
          <Text style={styles.label}>- Tentukan produk pinjaman dengan bunga yang menarik</Text>
        </View>
        <Text style={styles.productTitle}>KAS - Product for your Needs</Text>
        <View style={styles.products}>
          {products.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productItem}>
              <View style={styles.inner}>
                <Text style={styles.textItem}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  centerScreen: { flex: 1, justifyContent: "center", alignItems: "center" },
  creditContainer: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 18,
    paddingBottom: 64,
    backgroundColor: "#f8f9fe",
  },
  payAbility: {
    borderWidth: 1,
    borderColor: "#dedfe1",
    backgroundColor: "#fff",
    padding: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderRadius: 4,
  },
  headingText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#6a6a6a",
  },
  label: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#676767",
  },
  linkInfo: {
    color: "#457e75",
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    marginLeft: "auto",
    marginBottom: 24,
  },
  tips: {
    marginBottom: 24,
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "flex-start",
  },
  productItem: {
    width: "50%",
    padding: 4,
  },
  inner: {
    paddingTop: 24,
    paddingBottom: 24,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dedfe1",
    borderStyle: "dashed",
    borderRadius: 4,
  },
  productTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: "#6a6a6a",
    marginBottom: 12,
  },
  textItem: {
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
    color: "#676767",
    textAlign: "center",
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={OtherScreen}
        initialParams={{ name: "Home" }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Service"
        component={OtherScreen}
        initialParams={{ name: "Service" }}
        options={{
          tabBarLabel: "Service",
          tabBarIcon: ({ color, size }) => <Ionicons name="grid-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Credit"
        component={CreditScreen}
        initialParams={{ name: "Credit" }}
        options={{
          tabBarLabel: "Credit",
          tabBarIcon: ({ color, size }) => <Ionicons name="card-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={OtherScreen}
        initialParams={{ name: "User" }}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
