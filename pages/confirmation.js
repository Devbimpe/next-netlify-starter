import { useRouter } from 'next/router';

export default function Confirmation() {
  const router = useRouter();
  const { name, event } = router.query;

  const displayName = name || 'Guest';
  const displayEvent = event || 'our event';

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-4">🎉 Registration Confirmed!</h1>
        <p className="text-xl">
          Hello, <strong>{displayName}</strong>!<br />
          Thank you for registering for <strong>{displayEvent}</strong>.
        </p>
      </div>
    </main>
  );
}
