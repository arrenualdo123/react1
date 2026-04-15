import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    //Estilos  generales
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content:{
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:30,
        color:"#2c3e50",
    },

    //estilos ´para los ejercicios
    ejercicio:{
        backgroundColor:"#ffffff",
        padding:15,
        borderRadius:10,
        elevation:3,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,}
            
        },
        subtitle:{
            fontSize:18,
            fontWeight:"bold",
            marginBottom:10,
            color:"#3498db",
            borderBottomWidth:2,
            borderBottomColor:"#3498db",
            paddingBottom:5,
        },
        text:{  
            fontSize:14,
            lineHeight:20,
            marginBottom:8,
            color:"#34495e",
    },

    
}); 