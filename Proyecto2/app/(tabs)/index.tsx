import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodoItem } from '@/components/TodoItem';
import { Todo, FilterType } from '@/types/todo';
import { todoStyles } from '@/components/styles/todoStyles';

const STORAGE_KEY = '@todos';

export default function TodoScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0 || todos.length === 0) {
      saveTodos();
    }
  }, [todos]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error('Error al cargar los todos:', error);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error al guardar los todos:', error);
    }
  };

  const addTodo = () => {
    if (inputText.trim() === '') {
      Alert.alert('Error', 'Por favor escribe una tarea');
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputText.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInputText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    Alert.alert(
      'Eliminar tarea',
      '¿Estás seguro de que quieres eliminar esta tarea?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => setTodos(todos.filter((todo) => todo.id !== id)),
        },
      ]
    );
  };

  const clearCompleted = () => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    
    if (completedCount === 0) {
      Alert.alert('Aviso', 'No hay tareas completadas para eliminar');
      return;
    }

    Alert.alert(
      'Limpiar completadas',
      `¿Eliminar ${completedCount} tarea(s) completada(s)?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => setTodos(todos.filter((todo) => !todo.completed)),
        },
      ]
    );
  };

  const getFilteredTodos = (): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <View style={todoStyles.container}>
      <View style={todoStyles.header}>
        <Text style={todoStyles.title}>📝 Todo List</Text>
        <Text style={todoStyles.subtitle}>
          {activeCount} {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={todoStyles.keyboardView}
      >
        <View style={todoStyles.inputContainer}>
          <TextInput
            style={todoStyles.input}
            placeholder="Agregar nueva tarea..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addTodo}
            returnKeyType="done"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={todoStyles.addButton}
            onPress={addTodo}
            activeOpacity={0.7}
          >
            <Text style={todoStyles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={todoStyles.filterContainer}>
          <TouchableOpacity
            style={[
              todoStyles.filterButton,
              filter === 'all' && todoStyles.filterButtonActive
            ]}
            onPress={() => setFilter('all')}
          >
            <Text style={[
              todoStyles.filterText,
              filter === 'all' && todoStyles.filterTextActive
            ]}>
              Todas
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              todoStyles.filterButton,
              filter === 'active' && todoStyles.filterButtonActive
            ]}
            onPress={() => setFilter('active')}
          >
            <Text style={[
              todoStyles.filterText,
              filter === 'active' && todoStyles.filterTextActive
            ]}>
              Activas
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              todoStyles.filterButton,
              filter === 'completed' && todoStyles.filterButtonActive
            ]}
            onPress={() => setFilter('completed')}
          >
            <Text style={[
              todoStyles.filterText,
              filter === 'completed' && todoStyles.filterTextActive
            ]}>
              Completadas
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredTodos}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          )}
          keyExtractor={(item) => item.id}
          style={todoStyles.list}
          contentContainerStyle={todoStyles.listContent}
          ListEmptyComponent={
            <View style={todoStyles.emptyContainer}>
              <Text style={todoStyles.emptyText}>
                {filter === 'all'
                  ? '¡No hay tareas! Agrega una nueva 🎉'
                  : filter === 'active'
                  ? 'No hay tareas pendientes'
                  : 'No hay tareas completadas'}
              </Text>
            </View>
          }
        />

        {todos.some((todo) => todo.completed) && (
          <TouchableOpacity
            style={todoStyles.clearButton}
            onPress={clearCompleted}
            activeOpacity={0.7}
          >
            <Text style={todoStyles.clearButtonText}>Limpiar completadas</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}