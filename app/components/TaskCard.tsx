import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Checkbox } from "react-native-paper";

interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

const TaskCard = ({ id, title, done }: TaskProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(done);

  return (
    <Card style={styles.container} onPress={() => console.log()}>
      <Card.Actions >
        <Button>Cancel</Button>
        <Checkbox
          status={isChecked ? "checked" : "unchecked"}
          color="#95bab1"
          onPress={() => {
            setIsChecked(!isChecked);
          }}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9efe1",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "space-between",
    /* alignItems: "flex-end",
    width: '90%',
    maxHeight: "100%",
    height: '30%' */
  },
});

export default TaskCard;
