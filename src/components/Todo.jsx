import React from "react";
import {
  Card,
  Container,
  Typography,
  IconButton,
  CardContent,
} from "@material-ui/core";

import { Check, Delete } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

const Todo = ({ tittle, checkTodo, id, isCompleted, deleteTodo }) => {
  const markCompleted = () => checkTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray", width: "20" }}
        >
          <CardContent>
            {/* Check Icon */}
            <Typography variant="h5" component="h2" style={todoStyle}>
              <IconButton onClick={markCompleted}>
                <Check style={{ color: "green" }} />
              </IconButton>
              {tittle}
              <IconButton style={{ float: "right" }} onClick={delTodo}>
                <Delete style={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
