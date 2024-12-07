import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import { getTasks } from "../services/TasksService";

interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

const TaskListScreen = () => {
  const [cardsList, setCardList] = useState<TaskProps[]>([]);

  useEffect(() => {
    const tasks = getTasks();
    setCardList(tasks);
  }, []);

  const renderTask = (item: TaskProps) => {
    return (
      <View style={styles.card}>
        <TaskCard id={item.id} title={item.title} done={item.done} />;
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cardsList}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "30%",
    minWidth: "90%"
},
});

export default TaskListScreen;
