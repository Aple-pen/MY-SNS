import firebase from "firebase";
import firebaseApp from "./firebase";
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  emailLogin(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }

  emailSignup(email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }
  onAuthChange(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  onLogout() {
    firebaseApp.auth().signOut();
  }
}

export default AuthService;
