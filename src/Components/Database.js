import firebase from './../firebase'

export default class Database {

    static createMainList(userId, listName, orderIndex) {
        const itemsRef = firebase.database().ref('Users/' + userId + '/Lists');
        // Get a key for a new List.
        //var newListKey = itemsRef.push().key;
        const item = {
            title: listName,
            orderIndex: orderIndex,
            backgroundColor: '#103D5D',
            foregroundColor: '#FFFFFF'
        }
        return itemsRef.push(item).key;
    }

    static editMainList(userId, listId, listTitle, orderIndex, backgroundColor, foregroundColor) {
        const listRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}`);
        return listRef.update({
            title: listTitle,
            orderIndex: orderIndex,
            backgroundColor: backgroundColor,
            foregroundColor: foregroundColor
        });;
    }

    static deleteMainList(userId, listId) {
        const listRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}`);
        return listRef.remove();
    }

    static createSubList(userId, listId, listName, orderIndex) {
        const itemsRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}`);
        const item = {
            title: listName,
            orderIndex: orderIndex,
            backgroundColor: '#103D5D',
            foregroundColor: '#FFFFFF'
        }
        return itemsRef.push(item).key;
    }

    static editSubList(userId, listId, subListId, listName, orderIndex, backgroundColor, foregroundColor) {
        const listRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}/${subListId}`);
        return listRef.update({
            title: listName,
            orderIndex: orderIndex,
            backgroundColor: backgroundColor,
            foregroundColor: foregroundColor
        });;
    }

    static deleteSubList(userId, listId, subListId) {
        const listRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}/${subListId}`);
        return listRef.remove();
    }

    static createItem(userId, listId, subListId, itemName) {
      const itemsRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}/${subListId}`);
      const item = {
        title: itemName,
      }
      itemsRef.push(item);
    }

    static editItem(userId, listId, subListId, itemId, itemName) {
      const listRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}/${subListId}/${itemId}`);

      listRef.update({
        title: itemName
      });
    }

    static deleteItem(userId, listId, subListId, itemId) {
      const listRef = firebase.database().ref('Users/' + userId + `/Lists/${listId}/${subListId}/${itemId}`);
      return listRef.remove();
    }
}