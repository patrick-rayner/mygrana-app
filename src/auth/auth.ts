// auth.ts
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseApp from '../../firebase'; // Importa o objeto 'app' que configuramos anteriormente

const auth = getAuth(firebaseApp);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // Lida com a autenticação bem-sucedida aqui
  } catch (error) {
    // Lida com erros de autenticação aqui
  }
};

export { signInWithGoogle };