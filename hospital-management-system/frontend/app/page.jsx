export default function Home() {
  return (
    <div>
      <h2 className="text-xl mb-4">Welcome to the Hospital Management System</h2>
      <p>
        This is a minimal setup. Visit{' '}
        <a href="/auth" className="text-blue-600 underline">
          /auth
        </a>{' '}
        to log in or register.
      </p>
      <p>
        Test Firestore by visiting{' '}
        <a href="/api/health" className="text-blue-600 underline">
          /api/health
        </a>
        .
      </p>
    </div>
  );
}
