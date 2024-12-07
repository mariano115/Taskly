import { Text, View } from "react-native";
import TaskListScreen from "./screens/TaskListScreen";
import { PaperProvider } from "react-native-paper";

export default function Index() {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TaskListScreen />
      </View>
    </PaperProvider>
  );
}
