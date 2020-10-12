import firebaseApp from "firebase";

class Database {
  syncData(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/datas`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveData(userId, data) {
    firebaseApp.database().ref(`${userId}/datas/${data.id}`).set(data);
  }
  // saveComment(userId,data){
  //   firebaseApp.database().ref(`${userId}/datas/${data.id}/comment`).set(data)
  // }
  removeData(userId, data) {
    firebaseApp.database().ref(`${userId}/datas/${data.id}`).remove();
  }
}

export default Database;
