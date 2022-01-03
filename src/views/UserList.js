import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import users from '../data/users'

export default props => {
    
    const confirmUserDeletion = (user) => {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn(`Excluiu ${user.id}`)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    const getUserItem = ({ item: user }) => {
        return (
            <ListItem 
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar source={{ uri: user.avatarUrl }}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button 
                    type='clear'
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    icon={<Icon name='edit' size={25} color='orange' />}
                />
                <Button 
                    type='clear'
                    onPress={() => confirmUserDeletion(user)}
                    icon={<Icon name='delete' size={25} color='red' />}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}