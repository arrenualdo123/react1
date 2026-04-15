// components/TodoItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Todo } from '@/types/todo';
import { todoItemStyles } from './styles/todoStyles';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <View style={todoItemStyles.container}>
      <TouchableOpacity
        style={todoItemStyles.todoContent}
        onPress={() => onToggle(todo.id)}
        activeOpacity={0.7}
      >
        <View style={[
          todoItemStyles.checkbox,
          todo.completed && todoItemStyles.checkboxChecked
        ]}>
          {todo.completed && (
            <Text style={todoItemStyles.checkmark}>✓</Text>
          )}
        </View>
        <Text style={[
          todoItemStyles.todoText,
          todo.completed && todoItemStyles.todoTextCompleted
        ]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => onDelete(todo.id)}
        style={todoItemStyles.deleteButton}
        activeOpacity={0.7}
      >
        <Text style={todoItemStyles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
};