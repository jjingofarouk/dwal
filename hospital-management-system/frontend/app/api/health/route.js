import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../../lib/firebase';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GET() {
  try {
    const healthDocRef = doc(db, 'status', 'health');
    await setDoc(healthDocRef, {
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
    const healthDoc = await getDoc(healthDocRef);
    return new Response(JSON.stringify({ message: 'Health check passed', data: healthDoc.data() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
